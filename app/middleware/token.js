/**
 * Created by Tu on 2018/2/20.
 */
const {API_PREFIX, APP_ID, APP_SECRET} = require('../constants')
const request = require('axios')

module.exports = () => {
    return async () => {
        if (!global.access) {
            global.access = await request.get(`${API_PREFIX}token`, {
                params: {
                    grant_type: 'client_credential',
                    appid: APP_ID,
                    secret: APP_SECRET
                }
            })
        } else {
            console.log(global.access)
        }
    }
}