'use strict';

const Controller = require('egg').Controller
const sign = require('../utils/sign')
const TOKEN = 'mrgoodbye'

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg'
    }

    async test() {
        const {signature, echostr, timestamp, nonce} = this.ctx.query
        const key = [TOKEN, timestamp, nonce].sort().join('')
        const sign = require('crypto').createHash('sha1').update(key).digest('hex')
        console.log(sign === signature)
        // console.log(sign('jsapi_ticket', this.ctx.url))
        this.ctx.body = this.ctx.query
    }
}

module.exports = HomeController
