var express = require('express');
const StoredData = require('../../modals/StoredData/StoredData');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/allData', verifyToken, async (req, res) => {
    const result = await StoredData.find()
    res.send(result)
})
module.exports = router