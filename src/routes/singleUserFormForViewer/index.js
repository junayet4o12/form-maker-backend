var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Forms = require('../../modals/Forms/Forms');
var router = express.Router();
router.get('/singleUserFormForViewers/:email', verifyToken, async (req, res) => {
    const email = req.params.email;
    const yourFormsAsViewer = await Forms.find({ viewers: email });
    res.send(yourFormsAsViewer || []);
})
module.exports = router