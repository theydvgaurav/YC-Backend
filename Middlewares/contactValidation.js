const helpers = require('../helpers')

contactValidation = async (req, res, next) => {
    if (!req.body.name || req.body.name.length === 0)
        return res.status(400).send({ message: "Enter a valid name" })
    if (!helpers.isEmailValid(req.body.email))
        return res.status(400).send({ message: "Enter a valid email" })
    if (!helpers.isMobileNumberValid(req.body.mobile))
        return res.status(400).send({ message: "Enter a valid mobile number" })
    next();
}

module.exports = contactValidation