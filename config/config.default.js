exports.keys = "BulletBoxServer";
exports.cluster = {
  listen: {
    port: 7003,
    hostname: '127.0.0.1',
  }
}
exports.onerror = {
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
};
