require('dotenv').config()
const verifyOwner = (req, res, next) => {
    console.log('ownerEmail', req?.headers?.ownerEmail);
    next()

}

module.exports = verifyOwner