var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()
router.post('/jwt', async (req, res) => {
    const user = req.body;
    // const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    //     expiresIn: '1h'
    // })
    const token = jwt.sign(user, process?.env?.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
    })
    res.send({ token })
})

module.exports = router