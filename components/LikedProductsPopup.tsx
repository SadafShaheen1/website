import React from 'react';

interface Product {
    img: string;
    title: string;
    desc: string;
    price: string;
}

interface LikedProductsPopupProps {
    likedProducts: Product[];
    onClose: () => void;
}

const LikedProductsPopup: React.FC<LikedProductsPopupProps> = ({ likedProducts, onClose }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50'>
            <div className='bg-white rounded-lg p-4 max-w-[500px] overflow-y-auto'>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-xl font-semibold'>Liked Products</h3>
                    <button className='text-gray-500' onClick={onClose}>Close</button>
                </div>
                <ul>
                    {likedProducts.length > 0 ? (
                        likedProducts.map((product, index) => (
                            <li key={index} className='border-b py-2'>
                                <img src={product.img} alt={product.title} className='w-16 h-16 rounded-md mr-2' />
                                <div>
                                    <h4 className='font-semibold'>{product.title}</h4>
                                    <p className='text-gray-500'>{product.desc}</p>
                                    <div className='flex items-center'>
                                        <span className='text-gray-900 font-bold'>Price: Rs. {product.price}</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className='text-gray-500'>No products liked yet.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default LikedProductsPopup;
