import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import SharePopup from './SharePopup';

interface Product {
    img: string;
    title: string;
    desc: string;
    rating: string;
    price: string;
    product: string;
    images: string[];
}

interface ProductCardProps {
    img: string;
    title: string;
    desc: string;
    rating: string;
    price: string;
    product: Product; 
    onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, rating, price, product, onProductClick }) => {
    const [liked, setLiked] = useState(false);
    const [showSharePopup, setShowSharePopup] = useState(false);

    const handleLikeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLiked(!liked);
    };

    const handleShareClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowSharePopup(true);
    };

    const generateRating = () => {
        const ratingValue = parseInt(rating);
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= ratingValue) {
                stars.push(<AiFillStar key={i} />);
            } else {
                stars.push(<AiOutlineStar key={i} />);
            }
        }

        return (
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                {stars}
            </div>
        );
    };

    return (
        <div className='px-4 border border-gray-200 bg-blue-200 rounded-xl max-w-[400px] cursor-pointer' onClick={() => onProductClick(product)}>
            <br />
            <img className='w-full h-auto rounded-lg' src={img} alt={title} />
            <div className='space-y-2 py-2'>
                <h2 className='text-accent font-medium uppercase'>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>
                {generateRating()}
                <div className='flex items-center justify-between'>
                    <div className='font-bold'>
                        RS. {price}
                        <del className='text-gray-500 font-normal'>
                            RS. {parseInt(price) + 20000}
                        </del>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div onClick={handleLikeClick} className='cursor-pointer  transform transition-transform duration-200 hover:scale-125'>
                            {liked ? (
                                <AiFillHeart className='text-red-600' size={24} />
                            ) : (
                                <AiOutlineHeart className='text-gray-500' size={24} />
                            )}
                        </div>
                        <div onClick={handleShareClick} className='cursor-pointer  transform transition-transform duration-200 hover:scale-125 '>
                            <AiOutlineShareAlt className='text-green-700' size={24} />
                        </div>
                    </div>
                </div>
            </div>
            {showSharePopup && (
                <SharePopup
                    onClose={() => setShowSharePopup(false)}
                    link={`https://yourwebsite.com/product/${product.product}`}
                />
            )}
        </div>
    );
};

export default ProductCard;
