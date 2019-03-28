module.exports = app => {
  const { router, controller } = app;
  const returnJson = app.middleware.returnJson();
  router.get('/', controller.home.index);
  router.get('/link', controller.home.link); // 客户端连接服务端（非长连接）
  router.get('/project/init', returnJson, controller.project.init); 
  router.post('/project/update', controller.project.update); 
};