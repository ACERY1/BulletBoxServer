const Service = require('egg').Service;


class Version extends Service {
  /**
   * 在指定目录里创建app.json
   * appid|  | name | servers |  desc | path | updateTime
   * @return {Boolean} false means success
   */
  async create(serverPath){
    // 拿到项目根路径、在/web目录+ServerPath下创建 app.json 完成返回
  }

  /**
   * 更新某个项目的版本号
   */
  async update() {

  }
}

module.exports = Version;