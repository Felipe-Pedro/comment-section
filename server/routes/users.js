const express = require('express');

const db = require('../database/database');

let router = express.Router();

router.post('/', function(req, res) {
  const username = req.body["username"];

  if(!username) {
    res.sendStatus(400);
    return;
  }

  db.createUser(username);
  res.sendStatus(200);
})

module.exports = router;
