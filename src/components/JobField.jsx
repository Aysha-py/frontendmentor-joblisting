import React,{useState} from 'react'

const JobField = ({information}) => {

    
    const [newjob,setNewJob] = useState(true)
    const [featured,setFeatured] = useState(true) 
 
 
  return (
    <div className="job-field">
    
        {
            information?.map((value,index) => (
                <div id='jobfield-container' key={index}> 
                    <div className='jobfield-box'>
                        <div className='jobfield-content'>
                            
                            <img src={value.logo}    alt="company-logo"/>
                            
                            <div className='jobfield-details'>
                                <div className='jobfield-details-title'>
                                    <p>{value?.company}</p>
                                </div>
                                <div className='jobfield-details-title-subtitle'>
                                    {newjob ? <p>New </p> : null}
                                </div>
                                <div className='jobfield-details-title-subtitle'>
                                    {featured ? <p>Featured</p> : null}
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