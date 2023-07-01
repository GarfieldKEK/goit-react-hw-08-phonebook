import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';



import { selectContacts, selectVisibleForm } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toogleVisibleForm } from 'redux/contacts/contactsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const visibleForm = useSelector(selectVisibleForm);

  const contacts = useSelector(selectContacts);

  const hendleToggleVisibleForm = () => {
    dispatch(toogleVisibleForm());
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {!visibleForm && (
        <button
         
          onClick={hendleToggleVisibleForm}
        >
          new Contact
        </button>
      )}
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>

          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>You dont have contacts yet</p>
      )}
    </div>
  );
};

export default Home;
