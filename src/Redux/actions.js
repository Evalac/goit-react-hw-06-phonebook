import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/AddContact', contact => {
  return {
    payload: {
      name: contact.name,
      number: contact.number,
      id: nanoid(),
    },
  };
});
export const deleteContact = createAction('contacts/DeleteContact');
