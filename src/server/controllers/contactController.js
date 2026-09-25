import {createContact, fetchContactsByLang} from '../services/contactService.js'

export async function geContacts(req, res) {
    try {
        const data = await fetchContactsByLang()
        res.json(data)
    } catch (err) {
        console.error('Error fetching Contact:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}


export async function postContact(req, res) {
    try {
        const { name, email, phone, subject, message, intent } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        const contactSubject = subject || (phone ? `Phone: ${phone}` : null);

        const newContact = await createContact({
            name,
            email,
            subject: contactSubject,
            message,
            intent: intent || null,
        });
        res.status(201).json(newContact);
    } catch (err) {
        console.error('Error creating Contact:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
