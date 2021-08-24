import PlayCard from '../PlayCard/PlayCard';
import { makeAuthorsIndex } from '../../utils/utils';

function SearchResult({ cards, authors }) {
  const authorsIndex = makeAuthorsIndex(authors);
  return (
    <div className={`search-result ${!(cards.length || authors.length) && 'search-result_hidden'}`}>
      <ul className="search-result__cards">
        {cards.map((card) => (
          <PlayCard card={card} key={card._id} />
        ))}
      </ul>
      <ul className="search-result__index app__text">
        {Object.keys(authorsIndex).map((letter) => (
          <li key={letter}>
            <h3 className="search-result__letter">{letter}</h3>
            <ul className="search-result__authors-list">
              {authorsIndex[letter].map((author, i) => (
                <li key={i} className="search-result__authors">
                  {author}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
