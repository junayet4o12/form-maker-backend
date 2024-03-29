const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./src/DB/connectDB');
const port = process.env.PORT || 3000;
require('dotenv').config()

const addUser = require('./src/routes/addUser/index')
const allUsers = require('./src/routes/allUsers/index');
const allForms = require('./src/routes/allForms/index')
const createForm = require('./src/routes/createForm/index')

const applyMiddleWare = require('./src/middlewares/applyMiddlewares');
applyMiddleWare(app)
app.use(addUser)
app.use(allUsers)
app.use(allForms)
app.use(createForm)
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