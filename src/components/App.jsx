

import React from 'react';
import ContactsForm from './form/ContactsForm';
import ContactList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import './app.css'
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='app'>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;