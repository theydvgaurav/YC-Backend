const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
},
    { strictQuery: false }
)

const Users = mongoose.model('Users', UserSchema)
module.exports = Users