var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.put('/fillingUpForm/:userEmail/:formId', verifyToken, async (req, res) => {
    const userEmail = req.params.userEmail
    const query = { email: userEmail }
    const formId = req.params.formId
    const data = req.body;
    const fillingData = {
        formId: formId,
        data
    }
    const userData = await Users.findOne(query);
    const filterPreviousData = userData?.fillingUpForm?.filter(datum => datum?.formId !== formId)
    const newAllData = [...filterPreviousData, fillingData];
    const result = await Users.updateOne(query, {   fillingUpForm: newAllData }, { new: true });
    res.send(result)
})
module.exports = router