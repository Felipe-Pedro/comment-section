This is a simple backend made with Javascript, Express and Sequelize, it contains routes to manipulate comments and votes. 

The database of this project is very simple, it only has 4 tables which are comments, downvotes, votes and users, all of them can be manipulated by accessing the correct route with the necessary data. 

It doesn't have a authentication system, and that's why the users don't have a password. The intuit of this project is to show a simple CRUD based on the [frontend](https://github.com/Felipe-Pedro/comment-section/tree/main/my-app) part.

# Project structure

* bin
  * www - Initializes the express app
* [database](https://github.com/Felipe-Pedro/comment-section/tree/main/server/database) - Database manipulation files
  * [controllers](https://github.com/Felipe-Pedro/comment-section/tree/main/server/database/controllers) - Database controllers
  * [migrations](https://github.com/Felipe-Pedro/comment-section/tree/main/server/database/migrations) - Manipulation of tables
  * [models](https://github.com/Felipe-Pedro/comment-section/tree/main/server/database/models) - Sequelize models
* public - Files served by the app
* [routes](https://github.com/Felipe-Pedro/comment-section/tree/main/server/routes) - Server routes
* app.js - Configuration of express app