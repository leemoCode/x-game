const Controller = require('egg').Controller;

class BasicDataController extends Controller {
    async getBasicData() {
        const ctx = this.ctx;
        const results = await ctx.service.basicDataService.getAll();
        ctx.body = results;
    }

    async updateBasicData() {
        const { ctx } = this;
        const updateData = ctx.request.body; // 获取请求体中的更新数据
        const result = await ctx.service.basicDataService.update(updateData);
        if (result.affectedRows) {
            ctx.body = { status: 'success', message: '数据更新成功' };
        } else {
            ctx.body = { status: 'error', message: '数据更新失败' };
        }
    }
}

module.exports = BasicDataController;
