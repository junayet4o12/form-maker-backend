var express = require('express');
const Forms = require('../../modals/Forms/Forms');
var router = express.Router();
router.post('/createForm', async (req, res) => {
    const data = req.body;
    const result = await Forms.create(data);
    res.send(result)
})
module.exports = router