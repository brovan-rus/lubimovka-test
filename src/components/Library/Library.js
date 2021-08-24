import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import { authorFields, playFields, testData } from '../../utils/constants';
import React from 'react';
import { searchInArray } from '../../utils/utils';

function Library() {
  const [cardList, setCardList] = React.useState([]);
  const [authorsList, setAuthorsList] = React.useState([]);
  const [title, setTitle] = React.useState('Поиск');
  const handleSearch = (request) => {
    const searchResultCards = searchInArray(testData.result, playFields, request);
    const searchResultAuthors = searchInArray(testData.result, authorFields, request);
    setCardList(searchResultCards);
    setAuthorsList(searchResultAuthors);
    setTitle(
      searchResultCards.length || searchResultAuthors.length
        ? `По запросу «${request}» мы нашли`
        : `По запросу «${request}» мы ничего не нашли`,
    );
  };
  return (
    <section className="library">
      <SearchForm onSearch={handleSearch} cardList={cardList} title={title} />
      <SearchResult cards={cardList} authors={authorsList} />
    </section>
  );
}

export default Library;
