const Service = require('egg').Service;

class BasicDataService extends Service {
    async getAll() {
        console.log('******', this.app);

        const result = await this.app.mysql.query('SELECT 1 + 1 AS result');

        const results = await this.app.mysql.select('basicData'); // 查询 basicData 表
        return results;
    }
}

module.exports = BasicDataService;
