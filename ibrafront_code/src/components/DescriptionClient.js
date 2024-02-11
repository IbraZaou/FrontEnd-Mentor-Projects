import React from 'react';
import photo1 from '../assets/img/me.png'; // Import your first image

const DescriptionClient = () => {

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className='description-client'>

                <div className="wrapper-description">
                    <div className="description-text">
                        <h1>Hello ! <br /> Je suis Ibra <span>développeur passionné</span></h1>
                        <p>Codeur passionné donnant vie à des idées numériques <br /> une ligne de code à la fois.</p>

                        <button>
                            <a download>Devis</a>
                        </button>
                    </div>

                    <div
                        className="container-photo">
                        <img src={photo1} alt="" />
                    </div>

                </div>
                <i class="fa-solid fa-arrow-down" onClick={() => scrollDown()}></i>
            </div>
        </div>
    );
};

export default DescriptionClient;