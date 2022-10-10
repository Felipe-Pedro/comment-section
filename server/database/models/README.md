# Models

A model is a representation of the database's tables, it specifies the fields, the field's names and types, and other informations such as primary keys, defaults values and allow nulls.

Each model requires a sequelize object to manipulate its own table and exports a function used by the controllers to do CRUD operations.

Here is a example of the initialization of the comment model:

```javascript
module.exports = function Comment(sequelize) {
    return sequelize.define('Comment', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        ....
```