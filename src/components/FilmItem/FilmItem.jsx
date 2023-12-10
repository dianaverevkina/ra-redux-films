import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFilm, deleteFilm } from '../../redux/slice.js/filmsSlice';

export const FilmItem = ({film}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoriteFilms);

  if (!film) return;

  const {Title, Poster, Year, imdbID} = film;
  const isFavorite = favorites.find(film => film.imdbID === imdbID);

  function handleClick() {
    isFavorite ? dispatch(deleteFilm(imdbID)) : dispatch(addFilm(film))
  }

  return (
    <li className='film'>
      <NavLink to={`/films/${imdbID}`}>
        <div className="film__img">
          <img src={Poster} alt={Poster} />
        </div>
      </NavLink>
      <div className="film__content">
        <h2 className="film__title">
          {Title.length > 25 ? (Title.slice(0, 24) + '...') : Title} 
          <p className='film__year'>{`(${Year})`}</p>
        </h2>
        <button className="film__btn-add" onClick={handleClick}>
          {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </button>
      </div>
    </li>
  )
}
