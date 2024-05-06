var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.put('/updateUserData/:id', verifyToken, async (req, res) => {
    const id = req.params.id
    const data = req.body;
    const updatedData = {
        ...data
    }
    const result = await Users.findByIdAndUpdate(id, updatedData, { new: true })
    res.send(result)
})
module.exports = router