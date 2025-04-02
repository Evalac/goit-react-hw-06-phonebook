import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/actions';
import { useState } from 'react';

export default function NewContactForm() {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const onSubmit = e => {};
  return (
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
        dispatch(addContact(contact));
        setContact({ name: '', number: '' });
      }}
    >
      <label>
        Name
        <input
          onChange={e => {
            setContact(prev => ({ ...prev, name: e.target.value }));
          }}
          value={contact.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={e => {
            setContact(prev => ({ ...prev, number: e.target.value }));
          }}
          value={contact.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
