const router = require('express').Router();

router.route('/').get((req, res) => {
    console.log(req.body);
    res.status(200).send("Transfer Success!!");
});

module.exports = router;