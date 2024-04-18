var express = require('express');
const Forms = require('../../modals/Forms/Forms');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.put('/updateForm/:id', verifyToken, async (req, res) => {
    const id = req.params.id
    const data = req.body;
    console.log(data?.fields);
    const updatedData = {
        title: data?.title,
        description: data?.description,
        inputFields: data?.fields,
        formBgImg: data?.formBgImg
    }
    const result = await Forms.findByIdAndUpdate(id, updatedData, { new: true })
    res.send(result)
})
module.exports = router