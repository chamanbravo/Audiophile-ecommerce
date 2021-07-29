import React from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import { links } from '../utils/constants'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { Facebook, Instagram, Twitter } from './logos'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-items">
                <div className="footer-nav">
                    <Link to='/'><img src={logo} alt="logo"/></Link>
                    <ul className="nav-ul">
                        {links.map((link) => {
                            const {id, url, text} = link;
                            return(
                                <li key={id} className="nav-li">
                                    <Link className="nav-link" to={url}>{text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="footer-text">
                    <p className="footer-p">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <div className="social-buttons">
                        <a href="https://www.fb.com" rel="noreferrer" aria-label="Follow us on FB" target="_blank"><Facebook  /></a>
                        <a href="https://instagram.com" rel="noreferrer" aria-label="Follow us on Instagram" target="_blank"><Instagram /></a>
                        <a href="https://twitter.com" rel="noreferrer" aria-label="Follow us on twitter" target="_blank"><Twitter /></a>
                    </div>
                </div>
                <div className="copyright-text">
                    <p className="footer-p">Copyright {new Date().getFullYear()}. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
