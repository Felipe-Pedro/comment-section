const commentModel = require('../models/comment');

class CommentController {
    constructor(sequelize) {
        this.Comment = commentModel(sequelize);
    }

    async insertIntoComment(userId, content, reply=null) {
        return await this.Comment.create({
                userId: userId,
                content: content,
                reply: reply
        });
    }

    async getComments() {
        return await this.Comment.findAll();
    }

    async getCommentsId() {
        return await this.Comment.findAll({
            attributes: ['id']
        });
    }

    async updateComment(id, content) {
        return await this.Comment.update({content: content}, {
            where: {
                id: id
            }
        });
    }

    async deleteFromComment(id) {
        return await this.Comment.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = CommentController;