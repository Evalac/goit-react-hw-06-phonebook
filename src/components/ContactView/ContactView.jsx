import { useSelector } from 'react-redux';

export default function ContactView() {
  const contacts = useSelector(state => state.contactBook.contacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
}
