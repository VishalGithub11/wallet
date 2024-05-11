import React, { useState } from 'react';
import './App.scss';
import Wallet from './components/Wallet';
import Timeline from './components/Timeline';
import Buttons from './components/Buttons';

const popUpItem = [
  {
    itemName: "Edit",
    iconName: "fas fa-edit"
  },
  {
    itemName: "Courier info",
    iconName: "fas fa-window-maximize"
  },{
    itemName: "Share",
    iconName: "fas fa-share-square"
  },{
    itemName: "Remove",
    iconName: "fas fa-minus-square"
  },
]

const bottomNav = [ 'fas fa-folder', 'fas fa-compass', 'fas fa-bell', 'fas fa-cog']

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
            {/* <span>&lt;</span> */}
            <i className="fas fa-chevron-left"></i>
             
          </div>
          <div className="navbar-center">
            <span>Bitcoin Wallet</span>
          </div>
          <div className="navbar-right" onClick={handlePopupToggle}>
          <i class='fa fa-ellipsis-v'></i>
            {showPopup && (
              <div className="dropdown-menu">
                {
                  popUpItem.map((elem)=>(
                    <div className={`item ${elem.itemName === 'Remove' ? 'remove' : ""}`} key={elem.iconName}>
                    <button onClick={handlePopupToggle}>{elem.itemName}</button>
                    <i className={`${elem.iconName}`} />
                  </div>
                  ))
                }
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
    
    <Buttons />
      <div className="main">
      </div>
      <nav className="bottom-tabs">
        {
          bottomNav.map((elem)=>(
            <div className={`tab ${elem !== 'fas fa-folder' ? 'gray' : ''}`} key={elem}>
            <i className={elem} aria-hidden="true" />
            </div>
          ))
        }
        {/* <div className="tab">
        <i class="fas fa-folder" aria-hidden="true"></i>
        </div>

        <div className="tab">
        <i class="fas fa-compass" aria-hidden="true"></i>
        </div>

        <div className="tab">
          <i className="fas fa-bell"></i>  
        </div>

        <div className="tab">
          <i className="fas fa-cog"></i>
         
        </div> */}
      </nav>
    </div>
  );
}

export default App;
