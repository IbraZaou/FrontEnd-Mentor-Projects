import React from 'react';
import Logo from '../assets/img/site_logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className='nav'>
            <Link to='/entreprise'>
                <img src={Logo} alt="Logo" />
            </Link>
            <Link to='/client'>Client</Link >
        </div>
    );
};

export default Navbar;