var express = require('express');
const Forms = require('../../modals/Forms/Forms');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/allForms',  async (req, res) => {
    const result = await Forms.find()
    res.send(result)
})
module.exports = router