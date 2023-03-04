const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config();



register = async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10)
    const userRegister = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    })

    userRegister.save().then(data => {
        const token = jwt.sign(
            {
                id: data._id,
                name: data.name,
                email: data.email
            },
            process.env.ACCESS_TOKEN_SECRET
        )
        return res.status(200).send({ token: token, name: data.name, email: data.email, id: data._id });
    })
        .catch(error => {
            return res.json(error)
        })

}

login = async (req, res) => {

    const user = await User.findOne({ email: req.body.email })

    if (user && bcrypt.compare(req.body.password, user.password)) {

        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email
            },
            process.env.ACCESS_TOKEN_SECRET
        )
        return res.status(200).send({ accessToken: token, name: user.name, email: user.email, id: user._id, mobile: user.mobile })
    }
    res.status(401).send({ status: 'error', message: 'Invalid email/password' })
}

module.exports = { register, login }