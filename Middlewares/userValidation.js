const helpers = require('../helpers')

userValidation = async (req, res, next) => {
    if (!req.body.name || req.body.name === '')
        return res.status(400).send({ message: "Name is required" })
    if (!req.body.password || req.body.password.length < 8)
        return res.status(400).send({ message: "Password should be atleast of 8 characters" })
    if (!helpers.isEmailValid(req.body.email))
        return res.status(400).send({ message: "Enter a valid email" })
    next();
}


module.exports = userValidation