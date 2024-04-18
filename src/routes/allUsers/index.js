var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/allUsers',verifyToken, async (req, res) => {
    const result = await Users.find()
    res.send(result)
})
module.exports= router
