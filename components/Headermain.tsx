"use client";
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import LoginPopup from './LoginPopup';
import SignupPopup from './SignupPopup';
import ReservationPopup from './ReservationPopup';


interface Product {
    img: string;
    title: string;
    desc: string;
    price: string;
    product: string;
}

const productsData: Product[] = [{
    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjgyNDc0NzIxNDE2NTI5NTIy/original/c329a04a-51b7-477d-9fc7-7aa4a3a998e7.jpeg?im_w=960',
    title: 'Campsite in Langkawi, Malaysia',
    desc: '2 guests . 1 bedroom . 1 bed . 1 bath ',
    price: '14,999',
    product: '1',
},
{
    img: 'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=960',
    title: 'Windmill in Ponta Delgada, Portugal',
    desc: '2 guests . 1 bedroom . 1 bed . 1 bath',
    price: '9,876',
    product: '2',
},
{
    img: 'https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=960',
    title: 'Entire cottage in Sindun-myeon, Icheon-si, South Korea',
    desc: '3 guests . 1 bedroom . 2 beds . 1 bath',
    price: '9,189',
    product: '3',
},
{
    img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1059835496185405643/original/32da6f5a-5d1d-4d43-80dc-c4c45be38953.jpeg?im_w=960',
    title: 'Entire rental unit in Bressanone, Italy',
    desc: '2 guests . 1 bedroom . 1 bed . 1 bath',
    price: '29,999',
    product: '4',
},
{
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTgzNjcwNTI2MzI2MDM3NDEx/original/e6293c11-1522-47bd-9636-2e1c8a69c2b4.jpeg?im_w=1200",
    title: "Entire villa in Tambon Bo Put, Thailand",
    desc: '12 guests . 8 bedroom . 4 bed . 2 bath',
    product: '5',
    price: "Rs. 109,999",
},
{
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/717a4c2d-e8a9-4798-8378-0d878e0ed56e.jpeg?im_w=960",
    title: "Entire villa in Tambon Hua Hin, Thailand",
    desc: '8 guests . 8 bedroom . 4 bed . 2 bath',
    product: '6',
    price: "Rs. 59,999",
},
{
    img: "https://a0.muscache.com/im/pictures/monet/Luxury-20470768/original/bf8442bd-dbab-42f6-b3d3-667350f77e47?im_w=1200",
    title: "Entire villa in Koh Samui, Thailand",
    desc: '10 guests . 6 bedroom . 6 bed . 6 bath',
    product: '7',
    price: "Rs. 77,777",
},
{
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-620081444090625084/original/0f3eb402-960a-4a07-869c-a8863770660f.jpeg?im_w=1200",
    title: "Entire villa in Tambon Ko Pha-ngan, Thailand",
    desc: '9 guests . 7 bedroom . 5 bed . 6 bath',
    product: '8',
    price: "Rs. 67,842",
},
{
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/d2d9b639-abb3-4dad-b679-27b0a9fba7be.jpeg?im_w=720",
    title: "Entire place in Dhonakulhi, Maldives",
    desc: '10 guests . 6 bedroom . 6 bed . 6 bath',
    product: '9',
    price: "Rs. 123,123",
},
{
    img: "https://a0.muscache.com/im/pictures/a13deaa0-ee39-4d30-b281-166ce9e6f2ac.jpg?im_w=720",
    title: "Entire villa in Menaggio, Lake Como, Italy",
    desc: '18 guests . 13 bedroom . 17 bed . 13 bath',
    product: '10',
    price: "Rs. 290,999",
}];

const Headermain = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [showSignup, setShowSignup] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setFilteredProducts([]);
        } else {
            const filtered = productsData.filter(product =>
                product.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    const toggleLoginPopup = () => {
        setShowLogin(!showLogin);
    };

    const toggleSignupPopup = () => {
        setShowLogin(false); 
        setShowSignup(!showSignup);
    };
    const [showPopup, setShowPopup] = useState(false);

    const handleReserveClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleReservationSubmit = (formData: any) => {
        // Handle submission logic here (e.g., send data to server)
        console.log(formData); // Log the reservation data for now
        // Optionally close the popup after submission
        setShowPopup(false);
    };

    return (
        <div className='bg-blue-200 border-gray-200 py-6 hidden sm:block'>
            <div className='container flex justify-between items-center'>
                <img src="logoh2s.png" alt="" style={{ width: "180px" }} />

                <div className='w-full sm:w-[300px] md:w-[70%] relative ml-4'>
                    <input
                        className='border-gray-200 border p-2 px-4 rounded-lg w-full'
                        type='text'
                        placeholder='Search for your desired BnB'
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <IoIosSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-900' size={20} />
                </div>

                <div className='hidden lg:flex items-center gap-4 text-gray-500 text-lg'>
                    <a href="#" onClick={toggleLoginPopup}>
                        <FaUser size={25} />
                    </a>
                    <div className='relative'>
                        <a href="#">
                            <FiHeart size={25} />
                            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white flex items-center justify-center transform translate-x-1 -translate-y-1'>
                                0
                            </div>
                        </a>
                    </div>
                    <div className='relative'>
                        <a href="#">
                            <LiaShoppingBagSolid size={25} />
                            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white flex items-center justify-center transform translate-x-1 -translate-y-1'>
                                0
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {searchTerm !== '' && (
                <div className='container mt-4'>
                    <h2 className='font-medium text-xl'>Search Results</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-4'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <div key={index} className='border bg-blue-200 border-gray-200 p-4 rounded-lg'>
                                    <img src={product.img} alt={product.title} className='w-full h-auto rounded-lg mb-2' />
                                    <h3 className='text-lg font-medium'>{product.title}</h3>
                                    <p className='text-gray-500'>{product.desc}</p>
                                    <div className='flex items-center mt-2'>
                                        <span className='text-gray-900 font-bold'>Price: RS. {product.price}</span>
                                    </div>
                                    <br />
                                    <button
                                                        onClick={handleReserveClick}
                                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4"
                                    >
                                        Reserve Now
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-500'>SORRY NOTHING IS THERE ! TRY FINDING ANOTHER PLACE</p>
                        )}
                    </div>
                </div>
            )}
 {showPopup && (
            <ReservationPopup
                onClose={handleClosePopup}
                onSubmit={handleReservationSubmit}
            />
        )}
            {showLogin && <LoginPopup onClose={toggleLoginPopup} onSignupClick={toggleSignupPopup} />}
            {showSignup && <SignupPopup onClose={toggleSignupPopup} />}
        </div>
    );
};

export default Headermain;
