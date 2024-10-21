import React from 'react';
import '../styles/Loader.css';
import loaderImage from '../images/loader.png';

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src={loaderImage} alt="Loading" className="loader-image" />
      </div>
    </div>
  );
}

export default Loader;