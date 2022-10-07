const { Sequelize } = require('sequelize');
const votesModel = require('../models/votes');

const sequelize = new Sequelize('sqlite:database/db.db');

const votesTable = votesModel(sequelize);

const createTable = async function() {
    await votesTable.sync({
        force: true
    });

    sequelize.close();
}

createTable();