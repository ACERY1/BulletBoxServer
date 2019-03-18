const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.service.file.sayHello();
  }
}

module.exports = HomeController;