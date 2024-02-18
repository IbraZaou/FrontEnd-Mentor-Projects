import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const toggleButton = () => {
        setIsActive(!isActive);
        if (isActive) {
            navigate('/');
        } else {
            navigate('/entreprise');
        }
    };

    return (
        <div className={`toggle-button ${isActive ? 'active' : ''}`} onClick={toggleButton}>
            <div className="inner-circle"></div>
        </div>
    );
};

export default ToggleButton;
