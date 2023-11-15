import React from 'react';
import { useState } from 'react';
import photo1 from '../assets/img/me.png'; // Import your first image
import photo2 from '../assets/img/me2.jpg'; // Import your second image
import CV from '../assets/files/cv_developpeur_web.png';



const Description = () => {

    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className='description'>

            <div className="wrapper-description">
                <div className="description-text">
                    <h1>Hello ! <br /> Je suis Ibra <span>développeur passionné</span></h1>
                    <p>Codeur passionné donnant vie à des idées numériques <br /> une ligne de code à la fois.</p>

                    <button>
                        <a href={CV} download>CV <i class="fa-solid fa-download"></i> </a>
                    </button>
                </div>

                <div
                    className={`container-photo ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img src={isHovered ? photo2 : photo1} alt="" />
                </div>

            </div>
            <i class="fa-solid fa-arrow-down" onClick={() => scrollDown()}></i>
        </div>
    );
};

export default Description;