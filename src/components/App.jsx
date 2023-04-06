import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { ContactsForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <Layout>
      <h1>Phone book</h1>
      <ContactsForm></ContactsForm>
      <h2>Contacts</h2>
      <Filter/> 
      <ContactsList/>
      <GlobalStyle/>
    </Layout>
  );
};
