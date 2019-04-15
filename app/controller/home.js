const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.service.file.sayHello();
  }

  // 客户端连接
  async link() {
    this.ctx.body = this.ctx.helper.APISuccess({}, 'AABBBBAA');
  }
}

module.exports = HomeController;