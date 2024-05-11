var express = require('express');
const Forms = require('../../modals/Forms/Forms');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.put('/makeViewers/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const userData = await Forms.findByIdAndUpdate(id, { $push: { viewers: email } }, { new: true });
    res.send(userData);
})
module.exports = router