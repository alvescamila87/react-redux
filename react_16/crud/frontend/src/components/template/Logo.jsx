import './Logo.css'
import React from 'react';
import logo from "../../assets/images/logo1.png"
//import logo from "../../assets/images/logo2.png"
import { Link } from 'react-router-dom'

export default props => 
    <aside className='logo'>
        <Link to="/" className="logo">
            <img 
            src={logo} 
            alt="logo" 
            //height={100}

            />
        </Link>
    </aside>