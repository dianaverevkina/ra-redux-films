import { useGetFilmQuery } from '../../redux/slice.js/apiSlice'
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { FilmCard } from './FilmCard/FilmCard';

export const FilmView = () => {
  const id = useParams()
  const {data, isFetching, isSuccess} = useGetFilmQuery(id.filmId);

  if (!data) return;

  if (isFetching) {
    console.log('loader')
    return <Loader />
  } 

  return isSuccess && <FilmCard film={data}/>;
}
