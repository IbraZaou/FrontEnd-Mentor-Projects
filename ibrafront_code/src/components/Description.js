import React from 'react';
import photo1 from '../assets/img/me.png'; // Import your first image
import CV from '../assets/files/cv_developpeur_web.png';



const Description = () => {

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
                    className="container-photo">
                    <img src={photo1} alt="" />
                </div>

            </div>
            <i class="fa-solid fa-arrow-down" onClick={() => scrollDown()}></i>
        </div>
    );
};

export default Description;