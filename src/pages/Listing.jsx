import React from 'react';
import bgheaderdesktop from "../assets/img/bgheaderdesktop.svg";
import JobField from '../components/JobField';


const Listing = () => {
  return (
    <div id ='listing-container'>
      <div className='listing-header'>
        <img src={bgheaderdesktop} alt='headerimage'/>
      </div>

      <div className="listing-search">
          <div className="listing-search-container">
            <div className='listing-search-input'>
                <input type="text"></input>
                <button>X</button>
            </div>
            <div className='listing-search-button'>
              <button>clear</button>
            </div>
          </div>         
      </div>

      <div className="listing-content">
        <JobField/>
      </div>
    </div>
  )
}

export default Listing