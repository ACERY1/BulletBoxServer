const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.ctx.app.config.cluster)
    this.ctx.body = await this.ctx.service.file.sayHello();
  }

  // 客户端连接
  async link() {
    this.ctx.body = this.ctx.helper.APISuccess({}, 'link success!');
  }
}

module.exports = HomeController;