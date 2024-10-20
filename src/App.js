import React, { useState, useEffect } from 'react';
import IconGrid from './components/IconGrid';
import Button from './components/Button';
import QRPopup from './components/QRPopup';
import Loader from './components/Loader';
import CafeList from './components/CafeList';

function App() {
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [configData, setConfigData] = useState(null);
  const [cafeId, setCafeId] = useState(null);
  const [cafeList, setCafeList] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const cafeIdParam = queryParams.get('cafeId');
    
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
      
      if (cafeIdParam) {
        setCafeId(cafeIdParam);
        // Fetch single cafe data
        const response = {
          purchases: {
            purchaseCount: 6,
            currentPurchaseCount: 3
          },
          cafeConfig: {
            icon: "https://placehold.co/100x100/FFFFFF/000000/png?text=default+icon",
            readyIcon: "https://placehold.co/100x100/00FF00/000000/png?text=ready+icon",
            rewardIcon: "https://placehold.co/100x100/FFA500/000000/png?text=reward+icon",
            labelImage: "https://placehold.co/300x150/FFA500/000000/png?text=CAFE+LABEL",
            backgroundColor: "111111"
          }
        };
        setConfigData(response);
      } else {
        // Fetch cafe list
        const response = [
          {
            "cafeId": "GUID-1",
            "cafeName": "Cafe Mocha",
            "icon": "https://placehold.co/100x100/8B4513/FFFFFF/png?text=CM",
            "purchaseCount": 6,
            "currentPurchaseCount": 3
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          },
          {
            "cafeId": "GUID-2",
            "cafeName": "Tea Time",
            "icon": "https://placehold.co/100x100/008000/FFFFFF/png?text=TT",
            "purchaseCount": 8,
            "currentPurchaseCount": 5
          }
        ];
        setCafeList(response);
      }
      
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    let link = `https://your-domain.com/shared-link-${Date.now()}`;
    if (cafeId) {
      link += `?cafeId=${cafeId}`;
    }
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
      {cafeId ? (
        <>
          <img src={configData.cafeConfig.labelImage} alt="Cafe Label" className="label-image" />
          <IconGrid configData={configData} />
          <Button label="Generate QR" onClick={handleButtonClick} />
          {showQR && <QRPopup qrValue={qrValue} onClose={closeQRPopup} />}
        </>
      ) : (
        <CafeList cafes={cafeList} />
      )}
    </div>
  );
}

export default App;