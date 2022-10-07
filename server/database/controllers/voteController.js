const voteModel = require('../models/vote');

class voteController {
    constructor(sequelize) {
        this.Vote = voteModel(sequelize);
    }

    async insertIntoVote(commentId, userId) {
        return await this.Vote.findOrCreate({
            where: {
                commentId: commentId,
                userId: userId
            }
        });
    }

    async deleteFromVote(commentId, userId) {
        return await this.Vote.destroy({
            where: {
                commentId: commentId,
                userId: userId
            }
        });
    }

    async countVotes(commentId) {
        return await this.Vote.count({
            where: {
                commentId: commentId
            }
        })
    }
}

module.exports = voteController;