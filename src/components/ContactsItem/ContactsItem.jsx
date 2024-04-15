


import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps'; 
import s from "./contactsItem.module.css";

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const { id, name, number } = contact;

    const handleDelete = () => {
        dispatch(deleteContact(id)); 
    };

    return (
        <li className={s.contactItem}>
            <p className={s.contactP}>{name}: {number}</p>
            <button className={s.buttonItem} type="button" onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default ContactItem;






