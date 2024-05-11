var express = require('express');
const StoredData = require('../../modals/StoredData/StoredData');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/singleUserFormData/:id', verifyToken, async (req, res) => {
    const id = req.params.id;
    const email = req.params.email;
    const query = {
        formId: id,
    }
    const result = await StoredData.find(query);

    res.send(result)
})
module.exports = router