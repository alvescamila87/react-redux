import './Logo.css'
import React from 'react';
import logo from "../../assets/images/logo1.png"
//import logo from "../../assets/images/logo2.png"

export default props => 
    <aside className='logo'>
        <a href="/" className="logo">
            <img 
            src={logo} 
            alt="logo" 
            //height={100}

            />
        </a>
    </aside>