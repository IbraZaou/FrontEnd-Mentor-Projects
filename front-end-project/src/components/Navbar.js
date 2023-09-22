import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>IbraFront</h1>
                        
                <Link to="../pages/contact">
                    <i className="fa-solid fa-message fa-xl"></i>
                </Link>

        </div>
    );
};

export default Navbar;