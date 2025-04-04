import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, findContact } from './actions';

const initialState = {
  contacts: [
    {
      id: 'id-1',
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: 'id-2',
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: 'id-3',
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: 'id-4',
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ],
  filter: '',
};

export const contactReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    })
    .addCase(findContact, (state, action) => {
      state.filter = action.payload;
    });
});
