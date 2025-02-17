import React from 'react';
import './Home.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main className="home-content">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
