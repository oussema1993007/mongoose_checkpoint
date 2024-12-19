const express = require('express');
const path = require('path');
const ConnectDb = require('./Config/ConnectDb');
const ContactRoute = require('./Routes/ContactRoutes');

const app = express();
const port = 5003;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

ConnectDb();

app.use('/api', ContactRoute);

app.get('/add_a_contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add_a_contact.html'));
});

app.get('/update_a_contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'update_a_contact.html'));
});

app.get('/delete_a_contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'delete_a_contact.html'));
});

app.get('/get_all_contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'get_all_contacts.html'));
});

app.get('/get_contact_by_id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'get_contact_by_id.html'));
});

app.listen(port, (err) =>
    err ? console.log(err) : console.log(`You are connected successfully to the port ${port}`)
);