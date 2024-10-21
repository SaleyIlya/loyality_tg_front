import React from 'react';
import '../styles/IconGrid.css';

function IconGrid({ configData }) {
  const { purchases, cafeConfig } = configData;
  const { purchaseCount, currentPurchaseCount } = purchases;
  const { icon, readyIcon, rewardIcon } = cafeConfig;
  const totalIcons = purchaseCount + 1;

  const renderIcon = (index) => {
    if (index === totalIcons - 1) {
      return <img src={rewardIcon} alt="Reward" className="icon-image reward" />;
    } else if (index < currentPurchaseCount) {
      return <img src={readyIcon} alt="Ready" className="icon-image ready" />;
    } else {
      return <img src={icon} alt="Not Ready" className="icon-image" />;
    }
  };

  return (
    <div className="icon-grid">
      {[...Array(totalIcons)].map((_, index) => (
        <div key={index} className="icon">
          {renderIcon(index)}
        </div>
      ))}
    </div>
  );
}

export default IconGrid;