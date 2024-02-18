import React from 'react';


export const FormTemplate = () => {

    return (
        <div className="form-client">

            <div className="form-message">

            </div>

            <form>

                <h2>Discutons ensemble !</h2>

                <div className="icon-form">
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