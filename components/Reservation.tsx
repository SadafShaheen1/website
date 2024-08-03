"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FcSearch } from "react-icons/fc";


const regions = [
  { name: "I’m flexible", img: "https://img.freepik.com/free-vector/grey-world-map_1053-431.jpg" },
  { name: "Middle East", img: "https://t3.ftcdn.net/jpg/01/87/30/26/360_F_187302625_CFU3335bQeGbao7rBJ9ZICuTJJbz1bh4.jpg" },
  { name: "United Arab Emirates", img: "https://cdn.pixabay.com/photo/2016/04/29/00/41/united-arab-emerites-1360076_640.png" },
  { name: "Europe", img: "https://static.vecteezy.com/system/resources/previews/005/091/087/non_2x/high-quality-grey-map-of-europe-with-borders-of-the-regions-free-vector.jpg" },
  { name: "United Kingdom", img: "https://static.vecteezy.com/system/resources/previews/022/892/013/original/england-region-map-grey-color-png.png" },
  { name: "United States", img: "https://png.pngtree.com/png-vector/20220125/ourmid/pngtree-united-states-map-white-cut-concept-vector-png-image_26222314.png" },
];

const Reservation = () => {
  const [showWhereDropdown, setShowWhereDropdown] = useState(false);
  const [showWhoDropdown, setShowWhoDropdown] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]); 
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowWhereDropdown(false);
        setShowWhoDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleWhereClick = () => {
    setShowWhereDropdown(!showWhereDropdown);
    setShowWhoDropdown(false);
  };

  const handleWhoClick = () => {
    setShowWhoDropdown(!showWhoDropdown);
    setShowWhereDropdown(false);
  };

  const handleGuestChange = (type: string, value: React.SetStateAction<number>) => {
    switch (type) {
      case 'adults':
        setAdults(value);
        break;
      case 'children':
        setChildren(value);
        break;
      case 'infants':
        setInfants(value);
        break;
      case 'pets':
        setPets(value);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (e: { target: { value: any; }; }) => {
    console.log(e.target.value); 
  };

  const handleRegionSelect = (region: React.SetStateAction<{ name: string; img: string; }>) => {
    setSelectedRegion(region);
    setShowWhereDropdown(false); 
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6 pb-5">
      <div className="flex items-center bg-blue-300 rounded-full shadow-md p-2 space-x-2 w-full max-w-4xl relative">
        <div className="flex-1 p-3 border-r">
          <div className="font-bold">Where</div>
          <input
            type="text"
            placeholder={selectedRegion.name}
            className="w-full outline-none bg-blue-300 text-gray-600"
            onClick={handleWhereClick}
          />
          {showWhereDropdown && (
            <div ref={dropdownRef} className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-lg p-6 z-10">
              <h2 className="font-medium text-xl mb-4">Search by region</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-200 rounded-lg"
                    onClick={() => handleRegionSelect(region)}
                  >
                    <img src={region.img} alt={region.name} className="w-16 h-16 rounded-lg mb-2" />
                    <span className="text-gray-700">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 p-3 border-r">
          <div className="font-bold">Check in</div>
          <input
            type="date"
            placeholder="Add dates"
            className="w-full outline-none bg-blue-300 text-gray-600"
            onChange={handleDateChange}
          />
        </div>
        <div className="flex-1 p-3 border-r">
          <div className="font-bold">Check out</div>
          <input
            type="date"
            placeholder="Add dates"
            className="w-full outline-none bg-blue-300 text-gray-600"
            onChange={handleDateChange}
          />
        </div>
        <div className="flex-1 p-3 flex items-center justify-between relative">
          <div>
            <div className="font-bold">Who</div>
            <button
              className="w-full text-left mt-1 py-2 px-4 border border-blue-300 rounded-md outline-none "
              onClick={handleWhoClick}
            >
              {`${adults + children + infants + pets} Guests`}
            </button>
            {showWhoDropdown && (
              <div ref={dropdownRef} className="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg p-6 z-10">
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => handleGuestChange('adults', adults > 1 ? adults - 1 : 1)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="text-gray-700">{adults} Adults</span>
                  <button
                    onClick={() => handleGuestChange('adults', adults + 1)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => handleGuestChange('children', children > 0 ? children - 1 : 0)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="text-gray-700">{children} Children</span>
                  <button
                    onClick={() => handleGuestChange('children', children + 1)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => handleGuestChange('infants', infants > 0 ? infants - 1 : 0)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="text-gray-700">{infants} Infants</span>
                  <button
                    onClick={() => handleGuestChange('infants', infants + 1)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => handleGuestChange('pets', pets > 0 ? pets - 1 : 0)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="text-gray-700">{pets} Pets</span>
                  <button
                    onClick={() => handleGuestChange('pets', pets + 1)}
                    className="text-gray-500 bg-gray-200 hover:bg-blue-500 px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
          <button className="bg-transparent text-white rounded-full p-3 transform transition-transform duration-200 hover:scale-125">
                <FcSearch size={29} />
            </button>
      </div>
      </div>
    </div>
  );
};

export default Reservation;
