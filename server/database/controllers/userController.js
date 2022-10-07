const userModel = require('../models/user');

class userConstroller {
    constructor(sequelize) {
        this.User = userModel(sequelize);
    }

    async insertIntoUsers(username) {
        return await this.User.create({
            username: username
        });
    }

    async findUser(id) {
        return await this.User.findByPk(id);
    }
}

module.exports = userConstroller;