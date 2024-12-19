const express = require('express');
const { addNewContact, getAllContacts, getContactById, updateContact, removeContact } = require('../Controllers/ContactControllers');
const router = express.Router();

router.post('/add_contact', addNewContact);
router.get('/get_all_contacts', getAllContacts);
router.get('/get_contact_by_id/:id', getContactById);
router.put('/update_contact/:id', updateContact);
router.delete('/delete_contact/:id', removeContact);

module.exports = router;