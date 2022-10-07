const { Sequelize } = require('sequelize');
const userModel = require('../models/user');

const sequelize = new Sequelize('sqlite:database/db.db');

const usersTable = userModel(sequelize);

let createTable = async function() {
    await usersTable.sync({
        force: true
    });

    sequelize.close();
}

createTable();