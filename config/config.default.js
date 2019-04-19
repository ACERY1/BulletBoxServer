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
    whitelist: [
      // images
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
      '.gif', // image/gif
      '.bmp', // image/bmp
      '.wbmp', // image/vnd.wap.wbmp
      '.webp',
      '.tif',
      '.psd',
      // text
      '.svg',
      '.js', '.jsx',
      '.json',
      '.css', '.less',
      '.html', '.htm',
      '.xml',
      // tar
      '.zip',
      '.gz', '.tgz', '.gzip',
      // video
      '.mp3',
      '.mp4',
      '.avi',
      // font
      '.ttf',
      '.woff',
      '.ico',
      '.map',
    ]
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
