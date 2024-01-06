import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FF from '../assets/icon/frontendmentor.png';

export const FormTemplate = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMsg = document.querySelector('.form-message');

        emailjs.sendForm(
            'service_j1c3nip',
            'template_308c3yu',
            form.current,
            'ej4YH0LrSrJKrj6FQ'
        )
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                formMsg.innerHTML = "<p class='success'> Message envoyé avec un succès !</p>";

                setTimeout(() => {
                    formMsg.innerHTML = "";
                }, 2500);

            }, (error) => {
                console.log(error.text);
                formMsg.innerHTML = "<p class='error'> Une erreur s'est produite, veuillez réessayer </p>";

                setTimeout(() => {
                    formMsg.innerHTML = "";
                }, 2500);
            });
    };

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
        setMessage('Votre message à bien été envoyé !');
    };

    const handleDismiss = () => {
        setMessage('');
    };

    return (
        <div className="form">

            <div className="form-message">

            </div>

            <form ref={form} onSubmit={sendEmail}>

                <h2>Discutons ensemble !</h2>

                <div className="icon-form">
                    <a href="https://github.com/IbraZaou" target='_blank'>
                        <i class="fa-brands fa-github fa-2xl"></i>
                    </a>

                    <a target='_blank' className='ff' href="https://www.frontendmentor.io/profile/IbraZaou">
                        <img src={FF} alt="" />
                    </a>

                    <a target='_blank' href="https://www.linkedin.com/in/ibrazaou/">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </div>

                <div className="form-inputs">


                    {message && <p onClick={handleDismiss} className="success">
                        {message}
                    </p>}

                    <input type="text" name="name" required autoComplete='off' placeholder='Nom Prénom' />

                    <input type="email" name="email" required autoComplete='off' placeholder='Email' />

                    <textarea name="message" required placeholder='Hello World ...' />
                    <input type="submit" onClick={handleSubmit} value="Envoyer" />
                </div>
            </form>

        </div>
    );
};

export default FormTemplate;