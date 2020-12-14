import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchbarStyle';

function Searchbar({onSubmitForm}) {
  const [search, setSearch] = useState('');

  const handelSearch = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search.trim() === '') {
      return toast.error('Please enter something to start your search!');
    }

    onSubmitForm(search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  return (
      <SearchbarContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            onChange={handelSearch}
            value={search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarContainer>
  );
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
