const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
},
    { strictQuery: false }
)

module.exports = mongoose.model('Contacts', ContactSchema)