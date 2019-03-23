const Controller = require('egg').Controller;

class ProjectController extends Controller {
  /**
   * init project
   * 在web主目录下生成项目信息和初始化项目文件目录
   * /web/proj1 & app.json
   * @param {String} path - 欲映射的文件目录
   */
  async init() {
    // const { serverPath = path } = this.ctx.queries;
    this.ctx.body = this.ctx.helper.APIError("参数错误，需要提供文件路径");
    // this.ctx.message = "well";
    // this.ctx.status = 500;
    // this.ctx.body = "Well";
  }
}

module.exports = ProjectController;