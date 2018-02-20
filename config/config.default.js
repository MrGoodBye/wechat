'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1517407371017_7035';

    // add your config here
    config.middleware = [];

    // IP默认为服务器IP,
    // 监听80端口
    config.cluster = {
        listen: {
            port: 80,
            hostname: '0.0.0.0',
        }
    }

    config.bodyParser = {
        jsonLimit: '10mb'
    }

    config.security = {
        xframe: {
            enable: false,
        },
        csrf: {
            enable: false,
        },
    }

    return config;
};
