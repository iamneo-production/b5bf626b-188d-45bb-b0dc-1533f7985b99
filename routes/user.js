const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('We are on users');
});

router.post("/userposttest", (req, res) => {
    const username=req.body.username;
    console.log(username);
    res.send("User post test");
});


module.exports = router;