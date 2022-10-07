const { Sequelize } = require('sequelize');

const comment = require('./controllers/commentController');
const user = require('./controllers/userController');
const vote = require('./controllers/voteController');
const downvote = require('./controllers/downvoteController');

const sequelize = new Sequelize('sqlite:database/db.db');

const Comment = new comment(sequelize);
const User = new user(sequelize);
const Vote = new vote(sequelize);
const Downvote = new downvote(sequelize);

const createComment = async function(userId, content, reply=null) {
    return await Comment.insertIntoComment(userId, content, reply);
}

const getComments = function() {
    return Comment.getComments();
}

const getCommentsId = function() {
    return Comment.getCommentsId();
}

const updateComment = function(id, content) {
    return Comment.updateComment(id, content);
}

const deleteComment = function(id) {
    Vote.deleteFromVote(id);
    return Comment.deleteFromComment(id);
}

const createVote = function(userId, commentId) {
    Vote.insertIntoVote(commentId, userId);
    return Vote.countVotes(commentId);
}

const deleteVote = function(userId, commentId) {
    Vote.deleteFromVote(commentId, userId);
    return Vote.countVotes(commentId);
}

const countVotes = function(commentId) {
    return Vote.countVotes(commentId);
}

const createDownvote = function(userId, commentId) {
    Downvote.insertIntoDownvote(commentId, userId);
    return Downvote.countDownvotes(commentId);
}

const deleteDownvote = function(userId, commentId) {
    Downvote.deleteFromDownvote(commentId, userId);
    return Downvote.countDownvotes(commentId);
}

const countDownvotes = function(commentId) {
    return Downvote.countDownvotes(commentId);
}

const createUser = function(username) {
    return User.insertIntoUsers(username);
}

module.exports = {
    createComment,
    getComments,
    getCommentsId,
    updateComment,
    deleteComment,
    createVote,
    deleteVote,
    countVotes,
    createDownvote,
    deleteDownvote,
    countDownvotes,
    createUser
}