import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='header__navigation'> 
        <NavLink to={'/'} className={'header__link'}>Главная</NavLink>
        <NavLink to={'/favorites'} className={'header__link'}>Избранное</NavLink>
      </nav>
    </header>
  )
}
