import { useSelector } from 'react-redux'
import { FilmItem } from '../FilmItem/FilmItem'

export const Favorite = () => {
  const films = useSelector(state => state.favoriteFilms)

  return (
    <ul className='films'>
      {films.length 
        ? films.map(film => <FilmItem key={film.imdbID} film={film}/>) 
        : <p>Вы пока еще ничего не добавили</p>
      }
    </ul>
  )
}
