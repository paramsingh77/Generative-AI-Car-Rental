import React, { useRef } from 'react'
import '../assets/usec.css'
import '../assets/luxury.css'
const Luxury = () => {
  const inputref = useRef(null);
  const inputref1 = useRef(null);
  var check = false;
  
  const isScrollableToEnd = (element) => {
        // return element.scrollLeft + element.clientWidth >= element.scrollWidth/2; 
       return element.scrollLeft > 0;
      }
      const isScrollableToRight = (element) => {
        // return element.scrollLeft + element.clientWidth >= element.scrollWidth/2; 
       return element.scrollLeft < 0;
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
          inputref.current.scrollLeft -= 400;

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
      <div className='used-card'>New Cars</div>
     <div className='flex-card' ref={inputref}>
            <div className='car-card'>
            <img src='https://i.pinimg.com/564x/c9/64/6c/c9646cdfcc20feadda2f58c81136b944.jpg' alt='car-img' className='imd1'/>
            </div>
            <div className='car-card'>
            <img src='https://i.pinimg.com/736x/87/ae/75/87ae75d46af4fc09cb7d39a45848476b.jpg' alt='car-img' className='imd1'/>
            </div>
            <div className='car-card'>
            <img src='https://i.pinimg.com/564x/70/1b/8c/701b8c1a0d016cd975e146970f17a398.jpg' alt='car-img' className='imd1'/>
            </div>
            <div className='car-card'>
            <img src='https://i.pinimg.com/564x/76/ea/32/76ea323823e69d263fcfa6d6e942d9bd.jpg' alt='car-img' className='imd1'/>
            </div>
            <div className='car-card'>
            <img src='https://i.pinimg.com/564x/1e/22/53/1e2253dd8f35b2528801b73bdb1cf253.jpg' alt='car-img' className='imd1'/>
            </div>
            <div className='car-card'>
            <img src='https://i.pinimg.com/564x/c2/8b/5a/c28b5adb00e85b26aa393109188fcac6.jpg' alt='car-img' className='imd1'/>
            </div>
      </div>
      <div className='arrow'> <span  onClick={arrow}  className='x' ><i class="fa-solid fa-chevron-right"></i></span> </div>   
     </div>
  )
}

export default Luxury
