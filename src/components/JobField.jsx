import React from 'react'
import photosnap from '../assets/img/photosnap.svg'

const JobField = () => {
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
                        <p>New</p>
                    </div>
                    <div className='jobfield-details-title-subtitle'>
                        <p>Featured</p>
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
        <div className='jobfield-side'>
            <ul>
                <li> Frontend </li>
                <li> Senior </li>
                <li> HTML </li>
                <li> CSS </li>
                <li> Javascript </li>
            </ul>
        
        </div>
    
    </div>
  )
}

export default JobField