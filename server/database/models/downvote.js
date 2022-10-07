const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Downvote', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        commentId: {
            type: DataTypes.UUID,
            references: {
                model: 'Comments',
                key: 'id'
            },
            allowNull: false
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false
        }
    }, {
        timestamps: false
    });
}