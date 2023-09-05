const Service = require('egg').Service;

class BasicDataService extends Service {
    async getAll() {
        const results = await this.app.mysql.select('basicdata'); // 查询 basicData 表
        return results;
    }

    async update(data) {
        const result = await this.app.mysql.update('basicdata', data);
        return result;
    }
}

module.exports = BasicDataService;
