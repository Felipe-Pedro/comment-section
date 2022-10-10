# Controllers

Controllers implements the SQL commands by a sequelize object, they export a object used by the database.js file to manipulate the database.

The controllers objects require a sequelize object containing the database it will deal with as you can see on the controller's constructor.

```javascript
class CommentController {
    constructor(sequelize) {
        this.Comment = commentModel(sequelize);
    }
    
    ....
}
```
It passes the sequelize object to the table's models which will be manipulated.

The functions can ask for parameters (or not) containing the information to be changed or created, the fields are represented by the parameter's name, for example:

```javascript
async insertIntoComment(userId, content, reply=null) {
        return await this.Comment.create({
                userId: userId,
                content: content,
                reply: reply
        });
    }
```
This function on CommentController insert a new comment on the comment's table with the userId and content passed by the parameters, a comment can reply another comment or not and that's why the reply parameter is null on default.
   