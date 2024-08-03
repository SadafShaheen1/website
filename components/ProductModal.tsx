import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { IoClose } from 'react-icons/io5';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface Product {
    img: string;
    title: string;
    desc: string;
    rating: string;
    price: string;
    product: string;
    images: string[];
    amenities: string[];
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const [showReviews, setShowReviews] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const generateRating = (rating: string) => {
        const numericRating = parseInt(rating);
        return (
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                {[...Array(5)].map((_, index) => (
                    index < numericRating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
                ))}
            </div>
        );
    };

    const reviews = [
        {
            customer: 'Habiba Mehmood',
            review: 'Fantastic stay The place was beautiful and very clean.',
            rating: 4,
        },
        {
            customer: 'Sadaf Shaheen',
            review: 'Great experience! I will definitely come back!',
            rating: 5,
        },
        {
            customer: 'Agha Hammad',
            review: 'Amazing experience! The place was beautiful and very clean.',
            rating: 5,
        },
        {
            customer: 'Noman Islam',
            review: 'Great stay, but the location was a bit remote.',
            rating: 4,
        },
        {
            customer: 'Kulsoom Nasir',
            review: 'Had a fantastic time, will definitely come back!',
            rating: 4,
        },
        {
            customer: 'Bob Brown',
            review: 'The amenities were great but the bed was not comfortable.',
            rating: 2,
        },
    ];

    const getRandomReviews = () => {
        const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
        return shuffledReviews.slice(0, 3);
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
            <div ref={modalRef} className='bg-blue-100 p-8 rounded-xl max-w-[90%] max-h-[90%] overflow-y-auto relative flex'>
                <button onClick={onClose} className='absolute top-2 right-2 text-gray-700'>
                    <IoClose size={24} />
                </button>
                <div className='w-1/2 pr-4'>
                    <Slider {...sliderSettings}>
                        {product.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`} className='w-full h-auto rounded' />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='w-1/2 pl-4'>
                    <h2 className='text-2xl font-bold mt-4'>{product.title}</h2>
                    <p className='text-gray-700 mt-2'>{product.desc}</p>
                    <div className='mt-4'>
                        {generateRating(product.rating)}
                    </div>
                    <div className='mt-4 text-xl font-bold text-gray-900'>
                        RS. {product.price}
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-bold text-lg'>Amenities</h3>
                        <ul className='list-disc pl-5'>
                            {product.amenities.map((amenity, index) => (
                                <li key={index} className='text-gray-700'>{amenity}</li>
                            ))}
                        </ul>
                    </div>
                    <button 
                    onClick={() => setShowReviews(!showReviews)}
                    className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                         Reviews
                    </button>
                    {showReviews && (
                        <div className='mt-4'>
                            {getRandomReviews().map((review, index) => (
                                <div key={index} className='mt-2'>
                                    <p className='font-bold'>{review.customer}</p>
                                    <p className='text-gray-700'>{review.review}</p>
                                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <AiFillStar key={i} />
                                        ))}
                                        {[...Array(5 - review.rating)].map((_, i) => (
                                            <AiOutlineStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
