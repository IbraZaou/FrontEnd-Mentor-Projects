import React from 'react';
import { useState } from 'react';
import photo1 from '../assets/img/me.png'; // Import your first image
import photo2 from '../assets/img/me2.jpg'; // Import your second image



const Description = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='description'>

            <div className="wrapper-description">
                <div className="description-text">
                    <h1>Hello ! <br /> Je suis Ibra <span>Développeur Web</span></h1>
                    <p>Développeur Web passionné <br /> En quête de nouvelles opportunités et de défis</p>

                    <button>
                        <a href="" download="">CV <i class="fa-solid fa-download"></i> </a>
                    </button>
                </div>

                <div
                    className={`container-photo ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img src={isHovered ? photo2 : photo1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Description;