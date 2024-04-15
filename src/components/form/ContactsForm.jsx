


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from "./Form.module.css";
import { addContact } from '../../redux/contactsSlice';

const ContactsForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const initialValues = {
        name: '',
        number: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        number: Yup.string().required('Number is required'),
    });

    const isContactExists = (name, number) => {
        return contacts.some(contact =>
            contact.name.toLowerCase() === name.toLowerCase() ||
            contact.number === number
        );
    };

    const onSubmit = (values, { resetForm }) => {
        const { name, number } = values;
        if (isContactExists(name, number)) {
            alert(`${name} or ${number} already exists.`);
            return;
        }
        dispatch(addContact({ id: nanoid(), ...values }));
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={s.fieldGroup}>
                    <label htmlFor="name">Name:</label>
                    <Field type="text" id="name" name="name" required />
                    <ErrorMessage name="name" component="div" className={s.error} />
                </div>
                <div className={s.fieldGroup}>
                    <label htmlFor="number">Number:</label>
                    <Field type="tel" id="number" name="number" required />
                    <ErrorMessage name="number" component="div" className={s.error} />
                </div>
                <button className={s.buttonSubmit} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactsForm;

