var express = require('express');
const StoredData = require('../../modals/StoredData/StoredData');
var router = express.Router();
router.get('/allData', async (req, res) => {
    const result = await StoredData.find()
    res.send(result)
})
module.exports = router