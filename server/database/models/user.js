const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}