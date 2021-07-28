import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

function Button({link, cName, innerText}) {
    return (
        <div className="btn-container">
            <Link to={link} className={`btn ${cName}`}>{innerText}</Link>
        </div>
    )
}

export default Button
