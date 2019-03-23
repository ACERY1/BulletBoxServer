const Service = require('egg').Service;
const fs = require('fs');

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
  
  }
}

module.exports = FileRecorder;