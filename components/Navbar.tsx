import React from 'react';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex items-center justify-center gap-10 mx-auto font-medium py-4 text-blue-700'>
          <a href='' className='navbar_link relative'>
            Bali
          </a>

          <a href='' className='navbar_link relative'>
            Boro Boro
          </a>

          <a href='' className='navbar_link relative'>
           Lets Beachin'
          </a>

          <a href='' className='navbar_link relative'>
            LAKEFRONT
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
