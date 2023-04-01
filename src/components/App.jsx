import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { useState, useEffect } from 'react';
import { ContactsForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return [];
};


export const App = () => {

  const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if(contacts.find(contact => contact.name === newContact.name)){
      return alert(`${newContact.name} is already in contacts!`)
    }
    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactName => {
    setContacts(contacts.filter(contact => contact.name !== contactName));
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };
  
  const filterContact = (contactsArr) => {
    return contactsArr.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <Layout>
      <h1>Phone book</h1>
      <ContactsForm onSave={addContact} contacts={contacts}></ContactsForm>
      <h2>Contacts</h2>
      <Filter onChange={handleChange} value={filter}/> 
      <ContactsList contactsList={filterContact(contacts)} onClickDelete={deleteContact}/>
      <GlobalStyle/>
    </Layout>
  );
};
