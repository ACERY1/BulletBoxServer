const Controller = require('egg').Controller;

class ProjectController extends Controller {
  /**
   * init project
   * 在web主目录下生成项目信息和初始化项目文件目录
   * /web/proj1 & app.json
   * @param {String} path - 欲映射的文件目录
   */
  async init() {
    const { path } = this.ctx.queries;
    this.ctx.logger.info(path)
    this.ctx.body = this.ctx.helper.APIError("参数错误，需要提供文件路径");
    // this.ctx.message = "well";
    // this.ctx.status = 500;
    // this.ctx.body = "Well";
  }

  /**
   * 更新项目文件；文件放到http body里
   */
  async update() {
    this.ctx.logger.info(this.ctx.request.headers)
    // this.ctx.set('Content-Type', 'multipart/*')
    await this.ctx.service.file.copyFiles();
    this.ctx.body = this.ctx.helper.APISuccess({}, 'success');
  }

  /**
   * 接受远程命令启动测试服务
   */
  async server() {
    
  }

  /**
   * 根据项目的 appid 获取项目信息
   */
  async getProjectById() {
    
  }
}

module.exports = ProjectController;