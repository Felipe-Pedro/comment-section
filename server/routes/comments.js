const express = require('express');

const db = require('../database/database');

let router = express.Router();

router.get('/', async function (req, res) {
    let comments = await db.getComments();
    
    try {
        for (const comment of comments) {
            let votes = await db.countVotes(comment['id']);
            let downvotes = await db.countDownvotes(comment['id']);
    
            comment['dataValues']['votes'] = votes;
            comment['dataValues']['downvotes'] = downvotes;
        }
        res.json(comments);
    } catch(error) {
        res.sendStatus(406);
    }
  });

router.post('/', async function(req, res) {
    const userId = req.body["userId"];
    const content = req.body["content"];
    const replyingTo = req.body["reply"];

    if(!userId || !content) {
        res.sendStatus(400);
        return;
    }

    try {
        res.json(await db.createComment(userId, content, reply=replyingTo));
    } catch(error) {
        res.sendStatus(406);
    }
});

router.put('/', async function(req, res) {
    const id = req.body["id"];
    const content = req.body["content"]

    if(!id || !content) {
        res.sendStatus(400);
        return;
    }

    try {
        res.json(await db.updateComment(id, content));
    } catch(error) {
        res.sendStatus(406);
    }

});

router.delete('/', async function(req, res) {
    const id = req.body["id"];

    if(!id) {
        res.sendStatus(400);
        return;
    }

    try {
        res.json(await db.deleteComment(id));
    } catch(error) {
        console.log(error);
        res.sendStatus(406);
    }

});

module.exports = router;