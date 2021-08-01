import React from 'react'
import './Header.scss'
import { logo_desktop, icon_cart_desktop } from '../assets/index'
import { links } from '../utils/constants'
import { Link, useLocation } from 'react-router-dom'
import Burger from './Burger'


function Header() {
    const location = useLocation();

    return (
        <div className={`${location.pathname === '/' ? 'light-bgc' : 'dark-bgc'}` } >
            <div className="header-items">
                <Burger />
                <Link to='/'><img src={logo_desktop} alt="logo" /></Link>
                <ul className='nav-ul'>
                    {links.map((link) => {
                        const { id, url, text} = link;
                        return(
                            <li key={id} className="nav-li">
                                <Link to={url} className="nav-link">
                                    {text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="cart-icon-container">
                    <img className="cart-icon" src={icon_cart_desktop} alt="cart" />
                    <span className="cart-count">0</span>
                </div>
            </div>            
        </div>
    )
}

export default Header
