var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.put('/removeFillingUpFormData/:userEmail/:formId', verifyToken, async (req, res) => {
    const userEmail = req.params.userEmail
    const query = { email: userEmail }
    const formId = req.params.formId
    const userData = await Users.findOne(query);
    const filterPreviousData = userData?.fillingUpForm?.filter(datum => datum?.formId !== formId)
    const newAllData = [...filterPreviousData];
    const result = await Users.updateOne(query, { fillingUpForm: newAllData }, { new: true });
    res.send(result)
})
module.exports = router