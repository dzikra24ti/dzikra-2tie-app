import React from 'react';
import VisitorLayout from '../../layouts/VisitorLayout';
import Hero from '../../components/Hero';
import About from '../../components/About';
import ProductList from '../../components/ProductList';
import Testimoni from '../../components/Testimoni'; // Import ini

const LandingPage = () => {
  return (
    <VisitorLayout>
      <Hero />
      <About />
      <ProductList /> 
      <Testimoni/>
    </VisitorLayout>
  );
};

export default LandingPage;