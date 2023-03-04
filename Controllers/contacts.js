const Contact = require('../models/contacts')


getAllContacts = async (req, res) => {
    try {
        contacts = await Contact.find({ author: req.user.id })
        return res.send(contacts)
    } catch (error) {
        res.status(500).json(error)
    }
}

addContact = async (req, res) => {
    newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        author: req.user.id
    })
    newContact.save().then((data) => {
        return res.send({ message: "Contact successfully created" })
    })
        .catch(error => {
            return res.status(500).json(error)
        })
}

editContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        Object.keys(req.body).forEach(key => {
            contact[key] = req.body[key]
        })
        await contact.save()
        return res.send(contact);
    }
    catch (error) {
        return res.status(500).send(error);
    }
}

deleteContact = async (req, res) => {
    id = req.params.id
    try {
        await Contact.findByIdAndDelete(id);
        return res.status(201).send({ message: "Contact successfully deleted" });
    }
    catch (error) {
        return res.status(500).send(error);
    }
}

module.exports = { getAllContacts, addContact, editContact, deleteContact }