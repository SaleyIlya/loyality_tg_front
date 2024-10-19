import React, { useState, useEffect } from 'react';
import ImagePlaceholder from './components/ImagePlaceholder';
import IconGrid from './components/IconGrid';
import Button from './components/Button';
import QRPopup from './components/QRPopup';
import Loader from './components/Loader';

function App() {
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading time of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    const link = `https://your-domain.com/shared-link-${Date.now()}`;
    setQrValue(link);
    setShowQR(true);
  };

  const closeQRPopup = () => {
    setShowQR(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <ImagePlaceholder />
      <IconGrid />
      <Button label="Generate QR" onClick={handleButtonClick} />
      {showQR && <QRPopup qrValue={qrValue} onClose={closeQRPopup} />}
    </div>
  );
}

export default App;