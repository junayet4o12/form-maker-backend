var express = require('express');
const Forms = require('../../modals/Forms/Forms');
const verifyToken = require('../../middlewares/verifyToken');
const verifyOwner = require('../../middlewares/verifyOwner');
var router = express.Router();
router.get('/formDetailsForUpdateAndDelete/:id', verifyToken, verifyOwner, async (req, res) => {
    const id = req.params.id
    const result = await Forms.findById(id)
    res.send(result)
})
module.exports = router