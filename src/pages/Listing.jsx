import React,{useState,useEffect} from 'react';
import bgheaderdesktop from "../assets/images/bg-header-desktop.svg"
import JobField from '../components/JobField';
import listingData from '../data.json'


const Listing = () => {
  const [information,setInformation] = useState([])
  const [search,SetSearch] = useState('')
  const[show,setShow] = useState(true)

 

  useEffect(() => {
    const result = listingData.filter((info) =>
      info.role.toLowerCase().includes(search)
    );
    setInformation(result);
  }, [search]);




  return (
    <div id ='listing-container'>
      <div className='listing-header'>
        <img src={bgheaderdesktop} alt='headerimage'/>
      </div>

      <div className="listing-search">
          <div className="listing-search-container">
         
            <div className='listing-search-input'>
                <input type="text" 
                placeholder='Search' 
                value={search} 
                onChange={(e) => SetSearch(e.target.value)}/>
                <button onClick={() => SetSearch("")}>X</button>
                
              </div>
          
        
            <div className='listing-search-button'>
                <button>clear</button>
            </div>
          </div>         
      </div>

      <div className="listing-content">
        <JobField information={information}/>
      </div>
    </div>
  )
}

export default Listing