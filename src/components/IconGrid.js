import React from 'react';
import icon from '../images/placeholderIcon.png';
import readyIcon from '../images/placeholderReadyIcon.png';
import rewardIcon from '../images/placeholderRewardIcon.png';

const icons = [
    readyIcon, icon, icon, icon, icon, icon, rewardIcon
];

function IconGrid() {
  return (
    <div className="icon-grid">
      {icons.map((icon, index) => (
        <div key={index} className="icon">
          <img src={icon} alt={`Icon ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default IconGrid;