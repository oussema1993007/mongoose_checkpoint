const ContactSchema = require('../Model/Contact');

const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await ContactSchema.findById(id);
        res.status(200).json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).send('You have a problem');
    }
};

const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await ContactSchema.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
        res.status(200).json(updatedContact);
    } catch (error) {
        console.log(error);
        res.status(500).send('You have a problem');
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactSchema.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
        res.status(500).send('You have a problem');
    }
};

const addNewContact = async (req, res) => {
    try {
        const newContact = new ContactSchema(req.body);
        await newContact.save();
        res.status(200).json(newContact);
    } catch (error) {
        console.log(error);
        res.status(500).send('You have a problem');
    }
};

const removeContact = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await ContactSchema.findByIdAndDelete(id);
        res.status(200).json(deletedContact);
    } catch (error) {
        console.log(error);
        res.status(500).send('You have a problem');
    }
};

module.exports = { addNewContact, getAllContacts, getContactById, updateContact, removeContact };