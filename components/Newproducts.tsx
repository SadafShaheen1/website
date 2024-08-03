"use client";

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

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

const productsData: Product[] = [
    {
        img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjgyNDc0NzIxNDE2NTI5NTIy/original/c329a04a-51b7-477d-9fc7-7aa4a3a998e7.jpeg?im_w=960',
        title: 'Campsite in Langkawi, Malaysia',
        desc: '2 guests . 1 bedroom . 1 bed . 1 bath ',
        rating: '5',
        price: '14999',
        product: '1',
        images: [
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjgyNDc0NzIxNDE2NTI5NTIy/original/f7e973d7-4149-4fb9-8be7-302933e68f34.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjgyNDc0NzIxNDE2NTI5NTIy/original/0c701adc-02fa-4615-8086-60213fb778a2.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-682474721416529522/original/40d393ee-ecf2-4faa-bc74-8c1989c73c1b.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-682474721416529522/original/c5de931d-8d61-4cca-b6db-3fde37a3d763.jpeg?im_w=1200'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Washer']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=960',
        title: 'Windmill in Ponta Delgada, Portugal',
        desc: '2 guests . 1 bedroom . 1 bed . 1 bath',
        rating: '4',
        price: '9876',
        product: '2',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/bc9fdbba-a126-4357-946b-4d5f5581ca0f.jpeg?im_w=720',
            'https://a0.musache.com/im/pictures/miso/Hosting-5264493/original/d0a3e3b1-6d38-426d-8779-1ec5c8fbe30e.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/db17fce1-4ad0-45d8-8d7b-ba5ccdfe770c.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/66c30627-4220-4471-ac76-c739996386b5.jpeg?im_w=1200'
        ],
        amenities: ['Air conditioning', 'Heating', 'Kitchen', 'Free parking']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=960',
        title: 'Entire cottage in Sindun-myeon, Icheon-si, South Korea',
        desc: '3 guests . 1 bedroom . 2 beds . 1 bath',
        rating: '3',
        price: '9189',
        product: '3',
        images: [
            'https://a0.muscache.com/im/pictures/61c66a15-1617-4042-8987-878f4a70b837.jpg?im_w=1200',
            'https://a0.muscache.com/im/pictures/8bbe2dae-f9a5-4d5e-b682-5a8c2bc2231a.jpg?im_w=1200',
            'https://a0.muscache.com/im/pictures/045fd432-09a5-4687-8d0a-f24360def22d.jpg?im_w=1200'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Washer', 'Dryer']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1059835496185405643/original/32da6f5a-5d1d-4d43-80dc-c4c45be38953.jpeg?im_w=960',
        title: 'Entire rental unit in Bressanone, Italy',
        desc: '2 guests . 1 bedroom . 1 bed . 1 bath',
        rating: '5',
        price: '29999',
        product: '4',
        images: [
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1059835496185405643/original/47ad9bce-63a3-4c26-ba71-cbbe5f74aea2.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1059835496185405643/original/d7ae0a61-2495-4880-ba2c-5d9660f81d84.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1059835496185405643/original/de1d7899-6efe-49f1-b278-eb75594d1365.jpeg?im_w=720'
        ],
        amenities: ['Wi-Fi', 'Free parking', 'Pool', 'Hot tub']
    },
];
const moreproductsData: Product[] = [
    {
        img: 'https://a0.muscache.com/im/pictures/3231e971-5044-4a06-ab92-de1143910d73.jpg?im_w=960',
        title: 'Entire villa in Binibequer, Spain',
        desc: '12 guests . 5 bedrooms . 10 beds . 3 baths ',
        rating: '5',
        price: '744999',
        product: '1',
        images: [
            'https://a0.muscache.com/im/pictures/ad05bba9-0ccb-40a4-8d6a-5ccf60fcc148.jpg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-34281142/original/fb492612-32cf-4938-962e-b10076f6e02f.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-34281142/original/66d4a8d2-f94a-4bca-865d-7bdd8e533e50.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/51c5c3d5-2df4-4ac9-a956-79fe0024d4d6.jpg?im_w=720'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Washer']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/622f08e6-3fd4-4ead-b337-392c93dc3890.jpg?im_w=960',
        title: 'Entire villa in Kaş, Turkey',
        desc: '5 guests . 2 bedrooms . 1 bath',
        rating: '4',
        price: '9876',
        product: '2',
        images: [
            'https://a0.muscache.com/im/pictures/caa6471e-0fed-408e-aa71-99e7f695dce4.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/b1aba60b-c6f0-4a79-a3f3-338b0d69092a.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/3da82bf9-c24c-4b91-8a0b-bb00320833cc.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/a15c413f-06d6-4c08-9bfb-9cbd9577259c.jpg?im_w=1200'
        ],
        amenities: ['Air conditioning', 'Heating', 'Kitchen', 'Free parking']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/miso/Hosting-49372736/original/f707c814-69d7-4df0-af2f-d0c95a3c8a88.jpeg?im_w=960',
        title: 'Entire place in Vothonas, Greece',
        desc: '2 guests . 1 bedroom . 1 bed . 1 bath',
        rating: '4',
        price: '442442',
        product: '3',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-49372736/original/d7c76ecd-fea2-4d14-be1a-a6fb03e6df10.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-49372736/original/899fd0d1-1fd3-4cf4-86ea-836120016084.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-49372736/original/c9e3ebed-ea64-4991-8f5d-9a9a80d6f0c1.jpeg?im_w=1200'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Washer', 'Dryer']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/miso/Hosting-846164338660542962/original/e6d73513-e780-4fb2-94c7-36a57e77c5d3.jpeg?im_w=960',
        title: 'Entire rental unit in Bressanone, Italy',
        desc: '2 guests . 1 bedroom . 1 bed . 1 bath',
        rating: '5',
        price: '29999',
        product: '4',
        images: [
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODQ2MTY0MzM4NjYwNTQyOTYy/original/d25a4ffd-99c6-4d5a-af6b-096e6a271f27.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-846164338660542962/original/2ab5dafe-6036-4756-96f1-2a004fa02ef2.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-846164338660542962/original/9760f0ab-5405-43aa-b3d2-6ee899368577.jpeg?im_w=1200'
        ],
        amenities: ['Wi-Fi', 'Free parking', 'Pool', 'Hot tub']
    },
];
const newproductsData: Product[] = [
    {
        img: 'https://a0.muscache.com/im/pictures/20937903/82dfe32c_original.jpg?im_w=960',
        title: 'Entire home in Oia, Greece',
        desc: '3 guests . 2 bedrooms . 2 beds . 1 bath ',
        rating: '3',
        price: '41999',
        product: '1',
        images: [
            'https://a0.muscache.com/im/pictures/20937991/c4e3c2da_original.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/20938049/ce43cc77_original.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/20938162/ef67cc7e_original.jpg?im_w=720'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Washer']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/miso/Hosting-970170/original/4c417a66-2244-492f-8d59-3f37a129da66.jpeg?im_w=720',
        title: 'Cycladic home in Oia, Greece',
        desc: '6 guests . 2 bedrooms . 4 beds . 2 baths',
        rating: '4',
        price: '69989',
        product: '2',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-970170/original/b23c89c2-08b4-42d4-8461-6c1321c53c51.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-970170/original/1bedc7bd-b1ee-4175-adc5-cde0afa5a61d.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-970170/original/90ca6c7a-2cca-4b32-8e55-060d2d4212d6.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-970170/original/76243d88-a437-4fa3-abc1-f9ee5892cfb3.jpeg?im_w=1200'
        ],
        amenities: ['Air conditioning', 'Heating', 'Kitchen', 'Free parking']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/miso/Hosting-696715294291680242/original/7b478fd7-b946-42f7-a228-e6737c2610f4.jpeg?im_w=1200',
        title: 'Dammuso in Pantelleria, Italy',
        desc: '4 guests . 2 bedrooms . 2 beds . 2 baths',
        rating: '2',
        price: '9929',
        product: '3',
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-696715294291680242/original/e19c0153-1fa7-4d3c-8bdc-13887ad03904.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-696715294291680242/original/7b478fd7-b946-42f7-a228-e6737c2610f4.jpeg?im_w=960',
            'https://a0.muscache.com/im/pictures/miso/Hosting-696715294291680242/original/d49c4687-ce86-4784-b181-d6bf49e5204f.jpeg?im_w=1200'
        ],
        amenities: ['Wi-Fi', 'Kitchen', 'Washer', 'Dryer']
    },
    {
        img: 'https://a0.muscache.com/im/pictures/74752773/7be6e896_original.jpg?im_w=960',
        title: 'Entire home in Οία, Greece',
        desc: '3 guests . 1 bedroom . 2 beds . 1 bath',
        rating: '5',
        price: '29999',
        product: '4',
        images: [
            'https://a0.muscache.com/im/pictures/74752906/77ce44d1_original.jpg?im_w=1200',
            'https://a0.muscache.com/im/pictures/74753227/0e000591_original.jpg?im_w=1200',
            'https://a0.muscache.com/im/pictures/74753540/8baa713b_original.jpg?im_w=1200',
            'https://a0.muscache.com/im/pictures/74754309/5e9709e8_original.jpg?im_w=1200'
        ],
        amenities: ['Wi-Fi', 'Free parking', 'Hot tub']
    },
];

const NewProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        setSelectedProduct(null);
    }, []);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <div className='container pt-16'>
                <h2 className='font-medium text-2xl pb-4'>OMG!</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                    {productsData.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                            product={item}
                            onProductClick={() => handleProductClick(item)}
                        />
                    ))}
                </div>
                <br />
                <hr />
                <h2 className='font-medium text-2xl pb-4'>AMAZING POOLS!</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                    {moreproductsData.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                            product={item}
                            onProductClick={() => handleProductClick(item)}
                        />
                    ))}
                </div>
                <br />
                <hr />
                <h2 className='font-medium text-2xl pb-4'>HISTORICAL HOMES!</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                    {newproductsData.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                            product={item}
                            onProductClick={() => handleProductClick(item)}
                        />
                    ))}
                </div>
                <br />
                <hr />
            </div>
            <br />
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default NewProducts;
