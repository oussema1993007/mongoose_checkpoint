// Add Contact
document.getElementById('addContactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    fetch('/api/add_contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const addResult = document.getElementById('addResult');
        addResult.innerHTML = `<p>Contact added successfully</p>`;
    })
    .catch(error => {
        const addResult = document.getElementById('addResult');
        addResult.innerHTML = '<p>Error adding contact</p>';
        console.error('Error adding contact:', error);
    });
});

// Get All Contacts
document.getElementById('getContacts')?.addEventListener('click', function() {
    fetch('/api/get_all_contacts')
        .then(response => response.json())
        .then(data => {
            const contactsList = document.getElementById('contactsList');
            contactsList.innerHTML = '';
            if (data.length === 0) {
                contactsList.innerHTML = '<p>No contact added</p>';
            } else {
                data.forEach(contact => {
                    const contactCard = document.createElement('div');
                    contactCard.className = 'col-md-4 contact-card';
                    contactCard.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${contact.name} ${contact.lastName}</h5>
                                <p class="card-text"><strong>ID:</strong> ${contact._id}</p>
                                <p class="card-text"><strong>Age:</strong> ${contact.age}</p>
                                <p class="card-text"><strong>Phone:</strong> ${contact.phone}</p>
                                <p class="card-text"><strong>Email:</strong> ${contact.email}</p>
                            </div>
                        </div>
                    `;
                    contactsList.appendChild(contactCard);
                });
            }
        })
        .catch(error => console.error('Error fetching contacts:', error));
});

// Get Contact By ID
document.getElementById('getContactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    fetch(`/api/get_contact_by_id/${id}`)
        .then(response => response.json())
        .then(data => {
            const contactDetails = document.getElementById('contactDetails');
            contactDetails.innerHTML = `
                <p>ID: ${data._id}</p>
                <p>Name: ${data.name}</p>
                <p>LastName: ${data.lastName}</p>
                <p>Age: ${data.age}</p>
                <p>Phone: ${data.phone}</p>
                <p>Email: ${data.email}</p>
            `;
        })
        .catch(error => {
            const contactDetails = document.getElementById('contactDetails');
            contactDetails.innerHTML = '<p>Error fetching contact</p>';
            console.error('Error fetching contact:', error);
        });
});

// Update Contact
document.getElementById('updateContactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    fetch(`/api/update_contact/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const updateResult = document.getElementById('updateResult');
        updateResult.innerHTML = `<p>Contact updated successfully</p>`;
    })
    .catch(error => {
        const updateResult = document.getElementById('updateResult');
        updateResult.innerHTML = '<p>Error updating contact</p>';
        console.error('Error updating contact:', error);
    });
});

// Delete Contact
document.getElementById('deleteContactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    fetch(`/api/delete_contact/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        const deleteResult = document.getElementById('deleteResult');
        deleteResult.innerHTML = `<p>Contact deleted</p>`;
    })
    .catch(error => {
        const deleteResult = document.getElementById('deleteResult');
        deleteResult.innerHTML = '<p>Error deleting contact</p>';
        console.error('Error deleting contact:', error);
    });
});