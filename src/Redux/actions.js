import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/AddContact', contact => {
  return {
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
});
export const deleteContact = createAction(
  'contacts/DeleteContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);
