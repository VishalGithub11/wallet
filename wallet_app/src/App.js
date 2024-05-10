import React, { useState } from 'react';
import './App.scss';
import Wallet from './components/Wallet';
import Timeline from './components/Timeline';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleOutsideClick = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
    if(showPopup){
      setShowPopup(false)
    }
  };

  return (
    <div className="app" onClick={handleOutsideClick}>
      <header className="header">
        <div className="navbar">
          <div className="navbar-left">
            <span>&lt;</span>
          </div>
          <div className="navbar-center">
            <span>Bitcoin Wallet</span>
          </div>
          <div className="navbar-right" onClick={handlePopupToggle}>
          <i class='fa fa-ellipsis-v'></i>
            {showPopup && (
              <div className="dropdown-menu">
                <button onClick={handlePopupToggle}>Profile</button>
                <button onClick={handlePopupToggle}>Settings</button>
                <button onClick={handlePopupToggle}>Dashboard</button>
              </div> 
            )}
          </div>
        </div>
      </header>
     
     <Wallet 
     handleDropdownToggle={handleDropdownToggle} 
     showDropdown={showDropdown} 
     />
     <Timeline />

      <div className="main">
        {/* Add your main content here */}
      </div>
      <nav className="bottom-tabs">
        <div className="tab">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div className="tab">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </div>
        <div className="tab">
          <i className="fas fa-bell"></i>
          <span>Notification</span>
        </div>
        <div className="tab">
          <i className="fas fa-cog"></i>
          <span>Setting</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
