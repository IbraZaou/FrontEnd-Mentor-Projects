import React from 'react';
import Logo from '../assets/img/site_logo.png';

const Navbar = () => {
    return (
        <div className='nav'>
            <img src={Logo} alt="Logo" />
        </div>
    );
};

export default Navbar;