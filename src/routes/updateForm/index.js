var express = require('express');
const Forms = require('../../modals/Forms/Forms');
var router = express.Router();
router.put('/updateForm/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body;
    console.log(data?.fields);
    const updatedData = {
        title: data?.title,
        description: data?.description,
        inputFields: data?.fields
    }
    const result = await Forms.findByIdAndUpdate(id, updatedData, { new: true })
    res.send(result)
})
module.exports = router