import React from 'react';
import Logo from '../assets/img/site_logo.png';
import ToggleButton from './ToggleButton';


const Navbar = () => {

    return (
        <div className='nav'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            {/* <Link to='/entreprise' className="lien-hover">Vous souhaitez m'embaucher ?</Link > */}
            <ToggleButton />

        </div>
    );
};

export default Navbar;