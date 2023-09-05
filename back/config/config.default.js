/* eslint valid-jsdoc: "off" */

'use strict';
const fs = require('fs');
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1693471524430_4213';

  // add your middleware config here
  config.middleware = [];

  // Read database configuration from db-config.json
  const dbConfigPath = path.join(appInfo.baseDir, 'dbconfig.json');
  const dbConfig = JSON.parse(fs.readFileSync(dbConfigPath, 'utf8'));

  // MySQL configuration
  config.mysql = {
    client: {
      ...dbConfig
    },
    app: true,    // 是否加载到 app 上，默认开启
    agent: false, // 是否加载到 agent 上，默认关闭
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
