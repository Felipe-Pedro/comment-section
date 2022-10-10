# Database.js

The database.js file provides a object with the functions used to interact with de database, this file is the only one which the routes will need to be aware. It's responsible to provide simple and small functions that make all related actions on the db, for example:

If you want to delete a comment all you need to do is to call deleteComment passing the comment's id as a parameter and the function will also delete all the votes and downvotes without the necessity to call other functions since this actions are related.

```javascript
const deleteComment = function(id) {
    Vote.deleteFromVote(id);
    Downvote.deleteFromDownvote(id);
    return Comment.deleteFromComment(id);
}
```

The database.js file uses the tables controllers functions to communicate with the database itself, the db.db file. All logic should be applied on the routes, if it is needed to happen before or after the transaction, or in the controllers, if it is needed to happen during the transaction.