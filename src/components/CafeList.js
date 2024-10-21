import React from 'react';
import '../styles/CafeList.css';

function Header() {
  return (
    <header className="app-header">
      <h1>Loyalty App</h1>
    </header>
  );
}

function CafeTile({ cafe }) {
  return (
    <div className="cafe-tile" onClick={() => window.location.href = `/?cafeId=${cafe.cafeId}`}>
      <img src={cafe.icon} alt={cafe.cafeName} className="cafe-icon" />
      <div className="cafe-details">
        <div className="cafe-name">{cafe.cafeName}</div>
        <div className="cafe-progress">{cafe.currentPurchaseCount}/{cafe.purchaseCount}</div>
      </div>
    </div>
  );
}

function CafeList({ cafes }) {
  return (
    <div className="cafe-list-container">
      <Header />
      {cafes.length === 0 ? (
        <div className="empty-list-message">
          You are not a member of any loyalty program yet(
        </div>
      ) : (
        <div className="cafe-list">
          {cafes.map(cafe => (
            <CafeTile key={cafe.cafeId} cafe={cafe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CafeList;