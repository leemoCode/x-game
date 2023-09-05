// app/service/characterDataService.js

const Service = require('egg').Service;

class CharacterDataService extends Service {
    // 查询characterdata表的数据
    async getAll() {
        const results = await this.app.mysql.select('characterdata');
        return results;
    }

    // 新增数据到characterdata表
    async create(data) {
        const result = await this.app.mysql.insert('characterdata', data);
        return result;
    }

    // 更新characterdata表的数据
    async update(data) {
        const result = await this.app.mysql.update('characterdata', data);
        return result;
    }
}

module.exports = CharacterDataService;
