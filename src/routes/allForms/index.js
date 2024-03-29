var express = require('express');
const Forms = require('../../modals/Forms/Forms');
var router = express.Router();
router.get('/allForms', async (req, res) => {
    const result = await Forms.find()
    res.send(result)
})
module.exports = router