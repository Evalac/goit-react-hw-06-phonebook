import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/actions';

export default function ContactView() {
  const contacts = useSelector(state => state.contactBook.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button
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

// onClick={dispatch(deleteContact(contact.id))}
// export const deleteContact = createAction(
//   'contacts/DeleteContact',
//   contactId => {
//     return {
//       payload: contactId,
//     };
//   }
// );
