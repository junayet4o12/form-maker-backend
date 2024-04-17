var express = require('express');
const StoredData = require('../../modals/StoredData/StoredData');
var router = express.Router();
router.post('/storeData', async (req, res) => {
    const data = req.body;
    const result = await StoredData.create(data);
    res.send(result)
})
module.exports = router