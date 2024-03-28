const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;
require('dotenv').config()

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})