require('dotenv').config()
const verifyOwner = (req, res, next) => {
    next()

}

module.exports = verifyOwner