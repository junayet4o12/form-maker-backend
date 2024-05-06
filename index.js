const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./src/DB/connectDB');
const port = process.env.PORT || 5000;
require('dotenv').config()

const jwt = require('./src/routes/jwt/index')
const addUser = require('./src/routes/addUser/index')
const allUsers = require('./src/routes/allUsers/index');
const allForms = require('./src/routes/allForms/index')
const createForm = require('./src/routes/createForm/index')
const singleUserForms = require('./src/routes/singleUserForms/index')
const formDetails = require('./src/routes/formDetails/index')
const deleteForm = require('./src/routes/deleteForm/index')
const updateForm = require('./src/routes/updateForm/index')
const singleUserData = require('./src/routes/singleUserData/index')
const singleUserDataById = require('./src/routes/singleUserDataById/index')
const updateUserData = require('./src/routes/updateUserData/index')
const allData = require('./src/routes/AllData/index')
const storeData = require('./src/routes/storeData/index')
const singleUserFormData = require('./src/routes/singleUsersFormData/index')
const formDetailsForUpdateAndDelete = require('./src/routes/FormDetailsForUpdateAndDelete/index');
const fillUpFormDetails = require('./src/routes/fillUpFormDetails/index');
const applyMiddleWare = require('./src/middlewares/applyMiddlewares');
const fillUpData = require('./src/routes/fillingUpForm/index')
const fillingUpFormUserData = require('./src/routes/fillingUpFormData/index')
const removeFillingUpFormData = require('./src/routes/removeFillingUpFormData/index')
applyMiddleWare(app)
app.use(jwt)
app.use(addUser)
app.use(singleUserData)
app.use(singleUserDataById)
app.use(updateUserData)
app.use(allUsers)
app.use(allForms)
app.use(createForm)
app.use(singleUserForms)
app.use(formDetails)
app.use(deleteForm)
app.use(updateForm)
app.use(allData)
app.use(storeData)
app.use(singleUserFormData)
app.use(formDetailsForUpdateAndDelete)
app.use(fillUpFormDetails)
app.use(fillUpData)
app.use(fillingUpFormUserData)
app.use(removeFillingUpFormData)
app.all("*", (req, res, next) => {
    const error = new Error(`The requested Url is invalid : [${req?.url}]`)
    error.status = 404;
    next(error)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
main()