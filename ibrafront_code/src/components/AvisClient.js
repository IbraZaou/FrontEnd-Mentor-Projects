import React from 'react';
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
            message: "Une expérience exceptionnelle avec Ibra. Il a su comprendre nos besoins et livrer un site web remarquable, reflétant parfaitement notre image de marque"
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
                        <SwiperSlide className='swiperrr' key={index}>
                            <div className="review">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>

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