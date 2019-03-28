const Service = require('egg').Service;
const fs = require('mz/fs');
const path = require('path');
const toArray = require('stream-to-array');
const sendToWormhole = require('stream-wormhole');

class FileRecorder extends Service {
  async sayHello () {
    console.log('say hello from service');
    return 'hello'
  }

  /**
   * 将文件拷贝到指定的目录里
   * 如果没有目录则创建目录
   */
  async copyFiles () {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    let buf;
    try {
      const parts = await toArray(stream);
      buf = Buffer.concat(parts);
    } catch (err) {
      await sendToWormhole(stream); // drop 掉
      throw err;
    }

    const target = path.join(this.config.baseDir, '/web/app', stream.filename);
    await fs.writeFile(target, buf);
  }
}

module.exports = FileRecorder;