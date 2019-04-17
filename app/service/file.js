const Service = require("egg").Service;
const fs = require("mz/fs");
const fs_extra = require("fs-extra");
const path = require("path");
const toArray = require("stream-to-array");
const sendToWormhole = require("stream-wormhole");
const pump = require("mz-modules/pump");

class FileRecorder extends Service {
  async sayHello() {
    console.log("say hello from service");
    return "hello";
  }

  /**
   * 将文件拷贝到指定的目录里
   * 如果没有目录则创建目录
   */
  async copyFiles(filePath) {
    const parts = this.ctx.multipart({ autoFields: true });

    let stream;
    while ((stream = await parts()) != null) {
      const filename = stream.filename.toLowerCase();
      console.log(filename)
      const target = path.join(
        this.config.baseDir,
        "web/app",
        stream.fieldname
      );
      const isExists = await fs.exists(path.dirname(target));
      if (!isExists) {
        fs_extra.mkdirp(path.dirname(target), {}, async err => {
          if (err) this.ctx.helper.APIError("write file failed");
          // 异步注意：防止文件未创建好就开始写入流
          const writeStream = fs.createWriteStream(target);
          await pump(stream, writeStream);
          this.ctx.helper.APISuccess('deploy successfully!')
        });
      } else {
        const writeStream = fs.createWriteStream(target);
        await pump(stream, writeStream);
        this.ctx.helper.APISuccess('deploy successfully!')
      }
    }
  }
}

module.exports = FileRecorder;
