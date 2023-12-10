import { useState } from 'react'
import { useGetFilmsQuery } from '../../redux/slice.js/apiSlice'
import { FilmsList } from "./FilmsList/FilmsList";
import { Loader } from '../Loader/Loader';

export const MainPage = () => {
  const [searchField, setSearchField] = useState(undefined);
  const { data, isFetching, isSuccess } = useGetFilmsQuery(searchField);

  function handleChange(e) {
    const { value } = e.target;
    setSearchField(value);
  }

  let content;

  if (isFetching) {
    content = <Loader />;
  } else if (data.Error === 'Movie not found!') {
    content = <p>По Вашему запросу ничего не найдено</p>;
  } else if (isSuccess) {
    content = <FilmsList films={data.Search} /> 
  }

  return (
    <>
      <form className='form'>
        <input type="text" className='form__input' value={searchField} onChange={handleChange}/>
        <button className="form__btn"> Поиск </button>
      </form>
      {content}
    </>
  )
}
