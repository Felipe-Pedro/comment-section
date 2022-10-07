const { Sequelize } = require('sequelize');
const commentsModel = require('../models/comment');

const sequelize = new Sequelize('sqlite:database/db.db');

const commentsTable = commentsModel(sequelize);

const createTable = async function() {
    await commentsTable.sync({
        force: true
    });
    
    sequelize.close();
}

createTable();