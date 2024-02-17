import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const AvisClient = () => {

    const reviews = [
        {
            name: "Atletics Coachings",
            message: "J'ai pu ressentir l'expertise et le professionnalisme d'Ibra dans son domaine au cours de cette expérience client. La qualité, la réactivité, le service et la disponibilitésont au top ! Super prestation !"
        },
        {
            name: "OneStoreOrient",
            message: "Excellent service ! Très réactif et à l'écoute de mes besoins. Je recommande vivement pour la création de site web."
        },
        {
            name: "Previlience",
            message: "Sed euismod, leo auctor sollicitudin fringilla, nisl elit convallis libero, eu venenatis turpis arcu ac libero."
        }
    ];


    return (
        <div className='avis'>
            <h2>Découvrez leurs impressions</h2>

            <div className='avis-client'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="review">
                                <h3>{review.name}</h3>
                                <p>" {review.message} "</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default AvisClient;