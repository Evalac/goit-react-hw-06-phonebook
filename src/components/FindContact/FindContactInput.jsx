import css from './FindContactInput.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { findContact } from '../../Redux/actions';

export default function FindContactInput(params) {
  const filter = useSelector(state => state.contactBook.filter);
  const dispatch = useDispatch();

  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="text"
          onChange={e => {
            dispatch(findContact(e.target.value));
          }}
          value={filter}
        ></input>
      </label>
    </form>
  );
}
