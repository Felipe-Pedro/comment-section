const express = require('express');

const db = require('../database/database');

let router = express.Router();

router.post('/', function(req, res) {
    const userId = req.body['userId'];
    const commentId = req.body['commentId'];

    if(!userId || !commentId) {
        res.sendStatus(400);
    }

    try {
        res.json(db.createDownvote(userId, commentId));
    } catch(error) {
        res.sendStatus(406);
    }
});

router.delete('/', function(req, res) {
    const userId = req.body['userId'];
    const commentId = req.body['commentId'];

    if(!userId || !commentId) {
        res.sendStatus(400);
    }

    try {
        res.json(db.deleteDownvote(userId, commentId));
    } catch(error) {
        res.sendStatus(406);
    }
});

module.exports = router;