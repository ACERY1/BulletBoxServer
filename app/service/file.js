const Service = require('egg').Service;
const fs = require('mz/fs');
const path = require('path');
const toArray = require('stream-to-array');
const sendToWormhole = require('stream-wormhole');
const pump = require('mz-modules/pump');

class FileRecorder extends Service {
  async sayHello () {
    console.log('say hello from service');
    return 'hello'
  }

  /**
   * 将文件拷贝到指定的目录里
   * 如果没有目录则创建目录
   */
  async copyFiles (filePath) {
    // const ctx = this.ctx;
    // const parts = this.ctx.multipart({ autoFields: true })
    // const stream = await ctx.getFileStream();
    // let buf;
    // try {
    //   const parts = await toArray(stream);
    //   buf = Buffer.concat(parts);
    // } catch (err) {
    //   await sendToWormhole(stream); // drop 掉
    //   throw err;
    // }
    // console.log(stream)
    // const target = path.join(this.config.baseDir, '/web/app', stream.filename);
    // // const target = path.resolve(filePath);
    // await fs.writeFile(target, buf);
    const parts = this.ctx.multipart({ autoFields: true });
    const files = [];

    let stream;
    while ((stream = await parts()) != null) {
      const filename = stream.filename.toLowerCase();
      const target = path.join(this.config.baseDir, 'web/app', filename);
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
      files.push(filename);
    }
  }
}

module.exports = FileRecorder;