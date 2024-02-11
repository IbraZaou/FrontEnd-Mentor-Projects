import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const AvisClient = () => {

    const reviews = [
        {
            name: "John Doe",
            company: "ABC Company",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vel magna congue semper."
        },
        {
            name: "Jane Smith",
            company: "XYZ Corporation",
            message: "Sed euismod, leo auctor sollicitudin fringilla, nisl elit convallis libero, eu venenatis turpis arcu ac libero."
        },
        {
            name: "Jane Smith",
            company: "XYZ Corporation",
            message: "Sed euismod, leo auctor sollicitudin fringilla, nisl elit convallis libero, eu venenatis turpis arcu ac libero."
        },
        {
            name: "Jane Smith",
            company: "XYZ Corporation",
            message: "Sed euismod, leo auctor sollicitudin fringilla, nisl elit convallis libero, eu venenatis turpis arcu ac libero."
        },
    ];


    return (
        <div className='avis'>
            <h2>Découvrez leurs impressions</h2>

            <div className='avis-client'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="review">
                                <h3>{review.name}</h3>
                                <p>{review.company}</p>
                                <p>{review.message}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default AvisClient;