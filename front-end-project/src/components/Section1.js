import React from 'react';
import Photo from '../assets/img/me.png';

const Section1 = () => {
    return (
        <div className='section1'>

            <div className="container-greeting">
                <h2>Hello ! <br /> Je suis Ibrahim <span>Développeur Web</span></h2>

                <p>J'explore l'univers du développement web depuis plus d'un an ! Toujours en quête de nouveaux défis à relever !</p>

                <a href="#" download="#">
                    <button>Télécharger CV <i class="fa-solid fa-download"></i></button>
                </a>
            </div>

            <div className="container-pic">
                <img src={Photo} alt="Hello" />
            </div>
        </div>
    );
};

export default Section1;