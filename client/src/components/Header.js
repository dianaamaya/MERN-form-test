/**
 * menu displayed in app
 */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    
        <Link className="navbar-brand" to="/">API Form</Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item" key="signin">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>      
            </ul>
        </div>
    </nav>
    
}

export default Header;