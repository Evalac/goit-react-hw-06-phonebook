import { useDispatch, useSelector } from 'react-redux';
import { findContact } from '../../Redux/actions';

export default function FindContactInput(params) {
  const filter = useSelector(state => state.contactBook.filter);
  const dispatch = useDispatch();

  return (
    <form>
      <label>
        Find contacts by name
        <input
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
