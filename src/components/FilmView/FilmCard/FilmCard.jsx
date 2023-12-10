export const FilmCard = ({film}) => {
  const {Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating} = film;

  return (
    <div className='film-card'>
      <div className="film-card__img">
        <img src={Poster} alt="" />
      </div>
      <div className="film-card__content">
        <p className="film-card__title">Название: {Title}</p>
        <p className="film-card__title">Год выпуска: {Year}</p>
        <p className="film-card__title">Жанр: {Genre}</p>
        <p className="film-card__title">Продолжительность: {Runtime}</p>
        <p className="film-card__title">Режиссер: {Director}</p>
        <p className="film-card__title">Актеры: {Actors}</p>
        <p className="film-card__title">Рейтинг: {imdbRating}</p>
      </div>
    </div>
  )
}
