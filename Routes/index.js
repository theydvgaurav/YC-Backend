const express = require('express')
const router = express.Router()
const tokenValidation = require('../Middlewares/verifyToken')
const contactValidation = require('../Middlewares/contactValidation')
const auth = require('../Controllers/auth')
const contact = require('../Controllers/contacts')
const userValidation = require('../Middlewares/userValidation')

// register a user
router.post('/register', [userValidation], auth.register);

// login a user
router.post('/login', auth.login);

// get all contacts
router.get('/contacts', [tokenValidation], contact.getAllContacts);

// delete a contact
router.delete('/contacts/:id', [tokenValidation], contact.deleteContact);

// update a contact
router.patch('/contacts/:id', [tokenValidation,contactValidation], contact.editContact);

// add a contact 
router.post('/contacts', [tokenValidation,contactValidation], contact.addContact);


module.exports = router;