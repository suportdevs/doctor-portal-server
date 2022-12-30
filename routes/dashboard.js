const router = require('express').Router();

router.get('/appointment', (req, res) => {
    res.status(200).json("dashboard");
});

module.exports = router;