import React from 'react';
import loaderImage from '../images/loader.png'; // Make sure to add this PNG to your project

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