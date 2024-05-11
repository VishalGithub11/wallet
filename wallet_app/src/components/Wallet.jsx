import React from 'react';
import './Wallet.scss';

const Wallet = ({ handleDropdownToggle, showDropdown }) => {
  return (
    <div className="bitcoin-value-card">
      <div className="card" onClick={handleDropdownToggle}>
        <div className="bitcoin-info">
          <div className="logo">
            <div>
            <i className="fab fa-bitcoin"></i>
            <span>Bitcoin</span>
            </div>
           
            <p> BTC</p>
          </div>
          <div className="value">3.529020 BTC</div>
          <div className="additional-info">
           
              <p>$19,153 USD</p>
              <p className="percentage">-2.32%</p>
           
            
          </div>
          <div className="dropdown-icon">
            {
                !showDropdown &&
             <i className="fas fa-chevron-down"></i>
            }
             </div>
        </div>
        {showDropdown && (
            <div className='bottom-section'>

          <div className="down-arrow-section">
            <button className='buy'>$ Buy</button>
            <button className='sell'> $ Sell</button>
          </div>
          {showDropdown &&
         <div className="dropup-icon">
             <i className="fas fa-chevron-up"></i>
             </div>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
