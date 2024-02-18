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
                        <h1>Hello ! <br /> Je suis Ibra <span>votre développeur web</span></h1>
                        <p>Vous souhaitez avoir votre propre site internet ? <br />c'est par ici que ça se passe.</p>

                        <button>
                            <a href='mailto:ibra.developpeur@gmail.com' >Devis</a>
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