import css from './ContactView.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactSlice';

export default function ContactView() {
  const contacts = useSelector(state => state.contactBook.contacts);
  const filter = useSelector(state => state.contactBook.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <ul className={css.contact_list}>
      {filteredContacts.map(contact => (
        <li className={css.contact_list_item} key={contact.id}>
          <p className={css.contact_list_item_text}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contact_list_item_button}
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
