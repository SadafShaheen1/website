import React from 'react';

interface SlideProps {
    img: string;
    title: string;
    maintitle: string;
    price: string;
    onReserveClick: () => void;
}

const Slide: React.FC<SlideProps> = ({ img, title, maintitle, price, onReserveClick }) => {
    return (
        <div className="relative slide-container">
            <img
                className="w-full h-36 md:h-auto rounded-xl object-cover object-right md:object-left-bottom mb-4"
                src={img}
                alt="banner"
            />
            <div className="relative left-0 md:left-20 max-w-[250px] sm:max-w-[350px] space-y-2 lg:space-y-4 bg-white sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
                <h3 className="text-red-700 text-2xl lg:text-3xl">{title}</h3>
                <h2 className="underline text-blackish text-3xl md:text-3xl lg:text-4xl font-bold leading-1.2">
                    {maintitle}
                </h2>
                <h3 className="text-lg text-black-500">
                    starting at{' '}
                    <b className="text-2xl md:text-2xl lg:text-3xl">{price}.00</b>
                </h3>
                <div
                    className="max-w-32 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-700 hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
                >
                    <button onClick={onReserveClick} className="px-5 py-2">
                        Reserve
                    </button>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Slide;
