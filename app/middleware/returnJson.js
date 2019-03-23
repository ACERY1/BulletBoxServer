module.exports = () => {
  return (ctx, next) => {
    ctx.set('Content-Type', 'application/json');
    next();
  }
}