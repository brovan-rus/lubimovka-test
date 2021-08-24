import useForm from '../../utils/useForm';
import React from 'react';

function SearchForm({ onSearch, title }) {
  const form = useForm();
  const request = form.values.request;
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(request);
  };

  return (
    <div className="search-form app__text">
      <h1 className="search-form__title">{title}</h1>
      <form className="search-form__form">
        <input
          className="search-form__input"
          name="request"
          value={form.values.request || ''}
          onChange={form.handleChange}
        />
        <button className="search-form__button" onClick={handleSearch}>
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
