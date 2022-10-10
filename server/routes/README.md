# Routes

The routes are responsible to receive data from the web and do actions based on the accessed url and http method. Routes also verifies the existence of the required information on the request body and respond with the appropriated status code and data.

It use the database.js functions to manipulate comments and votes.

Example of create comment route:

```javascript
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
```