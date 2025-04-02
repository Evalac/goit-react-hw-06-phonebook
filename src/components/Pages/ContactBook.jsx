import NewContactForm from 'components/NewContact/NewContactForm';
import FindContactInput from 'components/FindContact/FindContactInput';
import ContactView from 'components/ContactView/ContactView';

export default function ContactBook(params) {
  return (
    <main>
      <h1>Phonebook</h1>
      <NewContactForm />
      <h2>Contacts</h2>
      <FindContactInput />
      <ContactView />
    </main>
  );
}
