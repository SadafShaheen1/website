"use client"
import React, { useState } from 'react';
import Slider from "react-slick";
import Slide from "./Slide";
import ReservationPopup from './ReservationPopup';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleReserveClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleReservationSubmit = (formData: any) => {
        console.log(formData);
        setShowPopup(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        css: {
            '.slick-slide': {
                margin: '0 10px',
            },
            '.slick-list': {
                margin: '0 -100px',
            }
        }
    };

    const slideData = [
        {
            id: 0,
            img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTgzNjcwNTI2MzI2MDM3NDEx/original/e6293c11-1522-47bd-9636-2e1c8a69c2b4.jpeg?im_w=1200",
            title: "Entire villa in Tambon Bo Put, Thailand",
            maintitle: "Latest offer",
            price: "Rs. 109,999",
        },
        {
            id: 1,
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/717a4c2d-e8a9-4798-8378-0d878e0ed56e.jpeg?im_w=960",
            title: "Entire villa in Tambon Hua Hin, Thailand",
            maintitle: "Latest offer",
            price: "Rs. 39,999",
        },
        {
            id: 2,
            img: "https://a0.muscache.com/im/pictures/monet/Luxury-20470768/original/bf8442bd-dbab-42f6-b3d3-667350f77e47?im_w=1200",
            title: "Entire villa in Koh Samui, Thailand",
            maintitle: "Most Selling",
            price: "Rs. 121,999",
        },
        {
            id: 3,
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-620081444090625084/original/0f3eb402-960a-4a07-869c-a8863770660f.jpeg?im_w=1200",
            title: "Entire villa in Tambon Ko Pha-ngan, Thailand",
            maintitle: "Latest Sale",
            price: "Rs. 55,230",
        },
        {
            id: 4,
            img: "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/d2d9b639-abb3-4dad-b679-27b0a9fba7be.jpeg?im_w=720",
            title: "Entire place in Dhonakulhi, Maldives",
            maintitle: "Special Deal",
            price: "Rs. 31,999",
        },
        {
            id: 5,
            img: "https://a0.muscache.com/im/pictures/a13deaa0-ee39-4d30-b281-166ce9e6f2ac.jpg?im_w=720",
            title: "Entire villa in Menaggio, Lake Como, Italy",
            maintitle: "Limited Time Offer",
            price: "Rs. 91,999",
        }
    ];

    return (
        <div className='bg-blue-300 rounded container pt-6 lg:pt-7 relative'>
            {showPopup && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <ReservationPopup
                        onClose={handleClosePopup}
                        onSubmit={handleReservationSubmit}
                    />
                </div>
            )}
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        maintitle={item.maintitle}
                        price={item.price}
                        onReserveClick={handleReserveClick}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
