'use strict';

const Controller = require('egg').Controller
const {TOKEN} = require('../constants')

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg'
    }

    async test() {
        const {signature, echostr, timestamp, nonce} = this.ctx.query
        const key = [TOKEN, timestamp, nonce].sort().join('')
        const sign = require('crypto').createHash('sha1').update(key).digest('hex')
        if (sign === signature) {
            this.ctx.response.end(echostr)
        }
        this.ctx.body = this.ctx.query
    }
}

module.exports = HomeController
