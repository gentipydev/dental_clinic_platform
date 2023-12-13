import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-custom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav navbar-nav-row mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link nav-link-custom" to="#">Prodotti & Prezzi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="#">Soluzioni</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/about">Sulla Clinica</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
