const { Sequelize } = require('sequelize');
const downvotesModel = require('../models/downvote');

const sequelize = new Sequelize('sqlite:database/db.db');

const downvotesTable = downvotesModel(sequelize);

const createTable = async function() {
    await downvotesTable.sync({
        force: true
    });
    
    sequelize.close();
}

createTable();