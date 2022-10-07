const express = require('express');

const db = require('../database/database');

let router = express.Router();

router.get('/', async function(req, res) {
    const commentId = req.body['commentId'];

    if(!commentId) {
        res.sendStatus(400);
    }

    try {
        res.json(await db.countVotes(commentId));
    } catch(error) {
        res.sendStatus(406);
    }
});

router.post('/', async function(req, res) {
    const userId = req.body["userId"];
    const commentId = req.body["commentId"];

    if(!userId || !commentId) {
        res.sendStatus(400);
        return;
    }

    try {
        res.json(await db.createVote(userId, commentId));
    } catch(error) {
        res.sendStatus(406);
    }

});

router.delete('/', async function(req, res) {
    const userId = req.body["userId"];
    const commentId = req.body["commentId"];

    if(!userId || !commentId) {
        res.sendStatus(400);
        return
    }

    try {
        res.json(await db.unvoteComment(userId, commentId));
    } catch(error) {
        res.sendStatus(406);
    }
});

module.exports = router;