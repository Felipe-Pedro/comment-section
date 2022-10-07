const { DataTypes } = require('sequelize');

module.exports = function Comment(sequelize) {
    return sequelize.define('Comment', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reply: {
            type: DataTypes.UUID,

            references: {
                model: 'Comments',
                key: 'id'
            }
        }
    }, {
        timestamps: false
    });
}