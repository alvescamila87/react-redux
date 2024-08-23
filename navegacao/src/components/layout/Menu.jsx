import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        {/* <a href="/">Home</a> */}
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                        {/* <a href="/about">About</a> */}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu