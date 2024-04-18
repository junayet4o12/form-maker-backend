var express = require('express');
const Forms = require('../../modals/Forms/Forms');
var router = express.Router();
router.get('/fillUpFormDetails/:id', async (req, res) => {
    const id = req.params.id
    const result = await Forms.findById(id)
    res.send(result)
})
module.exports = router