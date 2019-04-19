module.exports = appInfo => ({
  keys: "BulletBoxServer",
  // view: {
  //   // 静态文件映射路径
  //   root: require('path').join(appInfo.baseDir, 'webapp'),
  //   // mapping: {
  //   //   '.html': 'assets',
  //   // },
  // },
  // assets: {
  //   enable: true,
  //   package: 'egg-view-assets',
  // },
  static: {
    prefix: '/webapp/',
    dir: require('path').join(appInfo.baseDir, 'webapp'),
  },
  multipart: {
    fields: 300,
    files: 300,
  },
  onerror : {
    all(err, ctx) {
      ctx.body = '服务器内部错误';
      ctx.status = 500;
    },
    html(err, ctx) {
      // html hander
      ctx.body = '<h3>error</h3>';
      ctx.status = 500;
    },
    json(err, ctx) {
      // json hander
      ctx.body = { message: 'error' };
      ctx.status = 500;
    },
  },
  cluster: {
    listen: {
      port: 7003,
      hostname: '127.0.0.1',
    }
  }
});
