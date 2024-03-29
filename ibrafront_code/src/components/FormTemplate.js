import React from 'react';
import FF from '../assets/icon/frontendmentor.png';

export const FormTemplate = () => {

    return (
        <div className="form">

            <div className="form-message">

            </div>

            <form>

                <h2>Discutons ensemble !</h2>

                <div className="icon-form">
                    <a href="https://github.com/IbraZaou" target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-github fa-2xl"></i>
                    </a>

                    <a target='_blank' rel="noreferrer" className='ff' href="https://www.frontendmentor.io/profile/IbraZaou">
                        <img src={FF} alt="" />
                    </a>

                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ibrazaou/">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>

                    <a href='mailto:ibra.developpeur@gmail.com'>
                        <i class="fa-regular fa-envelope fa-2xl"></i>
                    </a>
                </div>
            </form>

        </div>
    );
};

export default FormTemplate;