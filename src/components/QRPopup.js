import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRPopup({ qrValue, onClose }) {
  return (
    <div className="qr-popup-overlay" onClick={onClose}>
      <div className="qr-popup-content" onClick={(e) => e.stopPropagation()}>
        <QRCodeSVG value={qrValue} size={250} />
      </div>
    </div>
  );
}

export default QRPopup;