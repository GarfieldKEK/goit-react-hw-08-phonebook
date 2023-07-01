import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';


export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(getFilter(e.target.value));
  };

  return (
    <div>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
    
        onChange={handleFilter}
        value={filter}
      />
    </div>
  );
};
