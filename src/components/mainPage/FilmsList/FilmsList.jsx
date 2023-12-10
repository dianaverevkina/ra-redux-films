import React from 'react'
import { useSelector } from 'react-redux'
import { FilmItem } from "../../FilmItem/FilmItem";

export const FilmsList = ({films}) => {
  return (
    <ul className='films'>
      {films && films.map(film => <FilmItem key={film.imdbID} film={film} />)}
    </ul>
  )
}
