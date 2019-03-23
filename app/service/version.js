const Service = require('egg').Service;


class Version extends Service {
  /**
   * 在指定目录里创建app.json
   * appID| LMT | hashVersion | name | serverPath | entry
   * @return {Boolean} false means success
   */
  async create(serverPath){
    // 拿到项目根路径、在/web目录+ServerPath下创建 app.json 完成返回
  }
}

module.exports = Version;