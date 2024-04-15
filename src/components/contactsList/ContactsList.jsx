



import s from './contactsList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactsItem/ContactsItem';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter).toLowerCase();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
            ))}
        </ul>
    );
};

export default ContactList;

