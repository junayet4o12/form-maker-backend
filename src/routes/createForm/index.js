var express = require('express');
const Forms = require('../../modals/Forms/Forms');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.post('/createForm', verifyToken, async (req, res) => {
    const data = req.body;
    const result = await Forms.create(data);
    res.send(result)
})
module.exports = router