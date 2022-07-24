import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const navLinkStyle = {
    color: 'white',
    backgroundColor: 'black',
}
const Header = () => {
    return (
        <header className='container__navbar'>
            <nav className='navbar'>
                <ul className='navbar__ul'>
                    <li className='navbar__li'>
                        <Link to='/form'>Formulario</Link>
                    </li>
                    <li className='navbar__li'>
                        <Link to='/'>Clickeame</Link>
                    </li>
                    <li className='navbar__li'>
                        <NavLink
                            style={({ isActive }) => (isActive ? navLinkStyle : undefined)}
                            to='/pokemon'
                        >
                            Pokemon
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
