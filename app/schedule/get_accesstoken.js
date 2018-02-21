/**
 * Created by Tu on 2018/2/21.
 */
const Subscription = require('egg').Subscription
const {API_PREFIX, APP_ID, APP_SECRET} = require('../constants')
const request = require('axios')

class GetAccessToken extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            interval: '7200s',
            type: 'all',
            immediate: true
        }
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        if (!global.access) {
            const access = await request.get(`${API_PREFIX}token`, {
                params: {
                    grant_type: 'client_credential',
                    appid: APP_ID,
                    secret: APP_SECRET
                }
            })
            global.access = access.data
        } else {
            console.log(global.access)
        }
    }
}

module.exports = GetAccessToken