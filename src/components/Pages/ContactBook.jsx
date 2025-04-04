import css from './ContactBook.module.css';

import NewContactForm from 'components/NewContact/NewContactForm';
import FindContactInput from 'components/FindContact/FindContactInput';
import ContactView from 'components/ContactView/ContactView';

export default function ContactBook(params) {
  return (
    <main className={css.contact_book}>
      <h1>Phone-book</h1>
      <NewContactForm />
      <h2>Contacts</h2>
      <FindContactInput />
      <ContactView />
    </main>
  );
}
