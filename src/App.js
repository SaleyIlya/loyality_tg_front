import React, { useState, useEffect } from 'react';
import IconGrid from './components/IconGrid';
import Button from './components/Button';
import QRPopup from './components/QRPopup';
import Loader from './components/Loader';

function App() {
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [configData, setConfigData] = useState(null);

  useEffect(() => {
    // Simulating a API request
    const fetchData = async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Fake response
      const response = {
        purchases: {
          purchaseCount: 6,
          currentPurchaseCount: 3
        },
        cafeConfig: {
          icon: "https://placehold.co/100x100/000000/FFFFFF/png?text=default+icon",
          readyIcon: "https://placehold.co/100x100/green/FFFFFF/png?text=ready+icon",
          rewardIcon: "https://placehold.co/100x100/orange/black/png?text=reward+icon",
          labelImage: "https://placehold.co/300x150/orange/black/png?text=CAFE+LABEL",
          backgroundColor: "111111"
        }
      };
      
      setConfigData(response);
      setIsLoading(false);
    };

    fetchData();
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
    <div className="app" style={{backgroundColor: `#${configData.cafeConfig.backgroundColor}`}}>
      <img src={configData.cafeConfig.labelImage} alt="Cafe Label" className="label-image" />
      <IconGrid configData={configData} />
      <Button label="Generate QR" onClick={handleButtonClick} />
      {showQR && <QRPopup qrValue={qrValue} onClose={closeQRPopup} />}
    </div>
  );
}

export default App;