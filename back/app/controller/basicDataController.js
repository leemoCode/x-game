const Controller = require('egg').Controller;

class BasicDataController extends Controller {
    async getBasicData() {
        const ctx = this.ctx;
        const results = await ctx.service.basicDataService.getAll();
        ctx.body = results;
    }
}

module.exports = BasicDataController;
