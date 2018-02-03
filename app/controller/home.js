'use strict';

const Controller = require('egg').Controller
const sign = require('../utils/sign')

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg'
    }

    async test() {
        // const params = this.ctx.request.body
        console.log(this.ctx.query)
        console.log(sign('jsapi_ticket', this.ctx.url))
        this.ctx.body = this.ctx
    }
}

module.exports = HomeController
