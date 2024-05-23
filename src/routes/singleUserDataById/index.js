var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/singleUserDataById/:id',verifyToken,  async (req, res) => {
    const result = await Users.findById(req?.params?.id)
    res.send(result)
})
module.exports= router
