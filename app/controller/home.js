'use strict';

const Controller = require('egg').Controller
const {TOKEN} = require('../constants')
const {API_PREFIX} = require('../constants')
const request = require('axios')
const menu = require('../public/menu.json')

class HomeController extends Controller {
    async index() {
        console.log(global.access)
        if(global.access) {
            console.log('create menu')
            const {data} = await request.post(`${API_PREFIX}menu/create?access_token=${global.access.access_token}`, menu)
            console.log(data)
        }
        this.ctx.body = 'hi, egg'
    }

    async test() {
        const {signature, echostr, timestamp, nonce} = this.ctx.query
        const key = [TOKEN, timestamp, nonce].sort().join('')
        const sign = require('crypto').createHash('sha1').update(key).digest('hex')
        if (sign === signature) {
            this.ctx.response.status = 200
            this.ctx.body = echostr
        }
    }
}

module.exports = HomeController
