import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  if (showProductList) {
    return <ProductList onHomeClick={handleHomeClick} />;
  }

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <p className="landing-eyebrow">Grown with intention, since 2019</p>
        <h1 className="landing-title">Paradise Nursery</h1>
        <AboutUs />
        <button className="btn btn-primary landing-cta" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
