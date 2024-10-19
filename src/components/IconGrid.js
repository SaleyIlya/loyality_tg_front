import React from 'react';
import defaultIcon from '../images/placeholderIcon.png';
import defaultReadyIcon from '../images/placeholderReadyIcon.png';
import defaultRewardIcon from '../images/placeholderRewardIcon.png';

function IconGrid({ configData }) {
  const { purchases, cafeConfig } = configData;
  const { purchaseCount, currentPurchaseCount } = purchases;
  const { icon, readyIcon, rewardIcon } = cafeConfig;
  const totalIcons = purchaseCount + 1;

  const getIconUrl = (serverUrl, defaultUrl) => {
    return serverUrl && serverUrl.trim() !== "" ? serverUrl : defaultUrl;
  };

  const iconUrl = getIconUrl(icon, defaultIcon);
  const readyIconUrl = getIconUrl(readyIcon, defaultReadyIcon);
  const rewardIconUrl = getIconUrl(rewardIcon, defaultRewardIcon);

  const renderIcon = (index) => {
    if (index === totalIcons - 1) {
      return <img src={rewardIconUrl} alt="Reward" className="icon-image" />;
    } else if (index < currentPurchaseCount) {
      return <img src={readyIconUrl} alt="Ready" className="icon-image" />;
    } else {
      return <img src={iconUrl} alt="Not Ready" className="icon-image" />;
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
