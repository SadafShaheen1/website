import React from 'react';
import Hero from '@/components/Hero'; 
import Newproducts from '@/components/Newproducts';
import Headermain from '@/components/Headermain';
import Headertop from '@/components/Headertop';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
        <Headertop />
        <Headermain />
        <Reservation />
        <Hero />
        <Newproducts/>
        <Footer/>

        
    </main>
  );
}
