const downvoteModel = require('../models/downvote');

class downvoteController {
    constructor(sequelize) {
        this.Downvote = downvoteModel(sequelize);
    }

    async insertIntoDownvote(commentId, userId) {
        return await this.Downvote.findOrCreate({
            where: {
                commentId: commentId,
                userId: userId
            }
        });
    }

    async deleteFromDownvote(commentId, userId) {
        return await this.Downvote.destroy({
            where: {
                commentId: commentId,
                userId: userId
            }
        });
    }

    async countDownvotes(commentId) {
        return await this.Downvote.count({
            where: {
                commentId: commentId
            }
        })
    }
}

module.exports = downvoteController;