import React,{useState} from 'react'
import photosnap from '../assets/img/photosnap.svg'

const JobField = () => {

    const [newjob,setNewJob] = useState(true)
    const [featured,setFeatured] = useState(true)
    const languages= ['Frontend','Senior','HTML','CSS','Javascript']

  return (
    <div id='jobfield-container'>
        <div className='jobfield-header'>
            <div className='jobfield-image'>
                <img src={photosnap} alt="photosnap company"/>
            </div>
            <div className='jobfield-details'>
                <div className='jobfield-details-title'>
                    <p>photosnap</p>
                    <div className='jobfield-details-title-subtitle'>
                        {newjob ? <p>New Job</p> : null}
                    </div>
                    <div className='jobfield-details-title-subtitle'>
                    {featured ? <p>Featured</p> : null}
                    </div>
                </div>
                <div className='jobfield-details-description'>
                    <p>Senior Frontend Developer</p>
                </div>
                <div className='jobfield-details-location'> 
                    <p>1d ago .</p>
                    <div className='jobfield-details-location-subtitle'>
                        <p>Fulltime .</p>
                    </div>
                    <div className='jobfield-details-location-subtitle'>
                        <p>USA only.</p>
                    </div>
                </div>
            </div>
        
        </div>
        
        {
            languages.map((language,index) => {
                return <ul className='jobfield-side' key={index}>
                        <li className='jobfield-side-list'> {language} </li>
                    </ul>
                
            })
                    
        }
           
        
    
    </div>
  )
}

export default JobField