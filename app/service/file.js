const Service = require('egg').Service;

class FileRecorder extends Service {
  async sayHello () {
    console.log('say hello from service');
    return 'hello'
  }
}

module.exports = FileRecorder;