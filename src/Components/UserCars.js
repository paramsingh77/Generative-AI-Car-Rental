import React, { useEffect, useRef } from 'react'
import '../assets/usec.css'
const UserCars = () => {
  const inputref = useRef(null);
  const inputref1 = useRef(null);
  var check = false;
  
  const isScrollableToEnd = (element) => {
        // return element.scrollLeft + element.clientWidth >= element.scrollWidth/2; 
       return element.scrollLeft > 0;
      }
      const isScrollableToRight = (element) => {
        // return element.scrollLeft + element.clientWidth >= element.scrollWidth/2; 
        console.log("scroll right ", element.scrollLeft);
        
       return element.scrollLeft <= 0;
      }
  const arrow = (element) => {
    console.log("Clicked element");
    console.log(inputref.current);
    
    if(inputref.current){
      console.log("scroll done");
      
       inputref.current.scrollLeft += 200;
       inputref.current.classList.add('scroll-transition')
       console.log("scroll doqne");
       addPrevArrow();

    }   
  }

  const moveRight = (element) => {
    console.log("moving left, " ,element);
     if(element){
      console.log("The element is valid");
      
      element.scrollLeft -= 300;
     }
        
  }
  const addPrevArrow = () => {
    if(!check){
      console.log("Function called");
      console.log(inputref1.current);
      if(!isScrollableToEnd(inputref)){

        console.log('this worked');
        check = true;

         const newDiv = document.createElement('div');
         newDiv.className = ('previous-arrow x1');
          
         const icon  = document.createElement('i');
         icon.className = 'fa-solid fa-chevron-left'
        //  icon.tagName = 'rag'
         newDiv.appendChild(icon);
        
         newDiv.addEventListener('click', ()=>{
          console.log("move right");
          
          // moveRight(inputref1.current)
          inputref.current.scrollLeft -= 300;

          if(!isScrollableToRight(inputref.current)){
            console.log("eleement removing");
            const i = document.getElementsByClassName('previous-arrow x1');
            console.log(i[0],  inputref1.current);
            inputref1.current.removeChild(i[0]);
            
        }
         });

         inputref1.current.appendChild(newDiv);
      }
    }
   

  }
  return (
    <div className='used-cars-container' ref={inputref1}>
      <div className='used-card'>Checkout some used cars</div>
      <div className='flex-card' ref={inputref}>
            <div className='car-card'>
                <img src='https://i.pinimg.com/564x/96/da/d8/96dad88cbf61e182d1de46b9c434d980.jpg' alt='car-img' className='imd'/>
            </div>
            <div className='car-card'>
               <img src='https://i.pinimg.com/564x/82/a8/40/82a840569ebe03e090fd0dcfaaf3fa4f.jpg' alt='car-img' className='imd'/>
            </div>
            <div className='car-card'>
               <img src='https://i.pinimg.com/564x/60/c8/a1/60c8a1b47894596b01a922b348a4717d.jpg' alt='car-img' className='imd'/>
            </div>
            <div className='car-card'>
               <img src='https://i.pinimg.com/564x/d5/d7/37/d5d737304947f02a4ab10fc46f537f82.jpg' alt='car-img' className='imd'/>
            </div>
            <div className='car-card'>
               <img src='https://i.pinimg.com/564x/af/ed/17/afed17360220a952ba6039992c49179e.jpg' alt='car-img' className='imd'/>
            </div>
            <div className='car-card'>
               <img src='https://i.pinimg.com/564x/91/b0/38/91b0389f8263dc736f8b1d1dbea59b6d.jpg' alt='car-img' className='imd'/>
            </div>
      </div>
            <div className='arrow'> <span  onClick={arrow}  className='x' ><i class="fa-solid fa-chevron-right"></i></span> </div>   

     </div>
           

  )
}

export default UserCars
