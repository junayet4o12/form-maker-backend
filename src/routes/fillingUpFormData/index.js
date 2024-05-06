var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/fillingUpFormUserData/:userEmail/:formId', async (req, res) => {
    const userEmail = req.params.userEmail
    const query = { email: userEmail }
    const formId = req.params.formId
    const userData = await Users.findOne(query);
    if (!userData) {
        return res.send('UserNotLoggedIn')
    }
    
    const formData = userData?.fillingUpForm?.find(datum => datum?.formId === formId)
    const result = formData?.data || []
    res.send(result)
})
module.exports = router