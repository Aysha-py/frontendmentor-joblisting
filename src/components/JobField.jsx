import React,{useState} from 'react'


const JobField = ({information,listingData}) => {

    
    const [newjob,setNewJob] = useState(true)
    const [featured,setFeatured] = useState(true) 
 
 console.log(listingData)
  return (
    <div className="job-field">
    
        {
            information?.map((value,index) => (
                <div id='jobfield-container' key={index}> 
                    <div className='jobfield-box'>
                        <div className='jobfield-content'>
                           <div className='jobfield-image'>
                                <img src={value?.logo}    alt="logo"/>
                            </div> 
                            <div className='jobfield-details'>
                                <div className='jobfield-details-title'>
                                    <p>{value?.company}</p>
                                </div>
                                <div className='jobfield-details-title-subtitle'>
                                { index === 0 || index === 1 ?
                                     <p className='p1'>New </p> : null
                                }
                                </div>
                                <div className='jobfield-details-title-subtitle'>
                                { index === 0 || index === 1 ?
                                    <p className='p2'>Featured</p> : null
                                 
                                 }
                                </div>
                            </div>
                        </div>   

                        <div className='jobfield-details-position'>
                            <p>{value?.position}</p>
                        </div>

                        <div className='jobfield-details-location'> 
                            <p>{value?.postedAt}.</p>
                            <div className='jobfield-details-location-subtitle'>
                                <p>{value?.contract} .</p>
                            </div>
                            <div className='jobfield-details-location-subtitle'>
                                <p>{value?.location}.</p>
                            </div>
                        </div>
                    </div> 

              
                    <div className='jobfield-side'>
                        <ul>
                            {value.languages.map((item,i) => 
                                <li key={i}>{item}</li>
                            )}
                        </ul>
                    </div>
                   
                </div>

                
                
            ))
        }
             
    
    </div>
  )
}

export default JobField