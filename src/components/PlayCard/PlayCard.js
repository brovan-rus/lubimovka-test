function PlayCard({ card }) {
  return (
    <li className="play-card app__text">
      <h2 className="play-card__title">{card.title}</h2>
      <div className="play-card__author-container">
        <p className="play-card__author">{card.author_lastName}</p>
        <p className="play-card__author">{card.author_firstName}</p>
      </div>
      <p className="play-card__caption">{card.city}</p>
      <p className="play-card__caption">{card.year}</p>
    </li>
  );
}

export default PlayCard;
