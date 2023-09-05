'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getBasicData', controller.basicDataController.getBasicData);
  router.post('/updateBasicData', controller.basicDataController.updateBasicData); // 添加一个 POST 路由来更新数据

  router.get('/getCharacterData', controller.characterDataController.getCharacterData);
  router.post('/createCharacterData', controller.characterDataController.createCharacterData);
  router.post('/updateCharacterData', controller.characterDataController.updateCharacterData);
};
