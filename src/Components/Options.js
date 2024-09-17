import React from 'react'
import '../assets/Option.css'
import video from '../videos/pinterest-video-90-pintod.mp4'
const Options = () => {
  return (
   
      <div  className='option-container'>
        <div className=' card-container'>
            <div className='card'>
                <div className='image-container'>
               {/* <video src={video} className='car-image' */}
               <img src='https://i.pinimg.com/564x/2f/dd/b5/2fddb55b5c4d411e284722ad1fb09d60.jpg' className='car-image' alt='used-car'/>
                <div className='title-car'>New Cars</div>
                </div>
             
                </div>
             {/* <div className='card'>New Cars</div> */}
             <div className='card'>
                <div className='image-container'>
                <img src='https://i.pinimg.com/474x/67/cd/d2/67cdd2b6b530fae2924db9a31b93bf4e.jpg' className='car-image1' alt='used-car'/>
                <div className='title-car'>Used Cars</div>
                </div>
           
             </div>
             <div className='card'>
             <div className='image-container'>
                <img src='https://i.pinimg.com/564x/93/b2/8b/93b28b7f1be2b0d173ce70d7d7d23241.jpg' className='car-image1' alt='used-car'/>
                <div className='title-car'>Rental Cars</div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Options
