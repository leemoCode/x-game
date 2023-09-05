// app/controller/characterDataController.js

const Controller = require('egg').Controller;

class CharacterDataController extends Controller {
    async getCharacterData() {
        const ctx = this.ctx;
        const results = await ctx.service.characterDataService.getAll();
        ctx.body = results;
    }

    async createCharacterData() {
        const { ctx } = this;
        const newData = ctx.request.body;
        const result = await ctx.service.characterDataService.create(newData);
        if (result.affectedRows) {
            ctx.body = { status: 'success', message: '数据新增成功' };
        } else {
            ctx.body = { status: 'error', message: '数据新增失败' };
        }
    }

    async updateCharacterData() {
        const { ctx } = this;
        const updateData = ctx.request.body;
        const result = await ctx.service.characterDataService.update(updateData);
        if (result.affectedRows) {
            ctx.body = { status: 'success', message: '数据更新成功' };
        } else {
            ctx.body = { status: 'error', message: '数据更新失败' };
        }
    }
}

module.exports = CharacterDataController;
