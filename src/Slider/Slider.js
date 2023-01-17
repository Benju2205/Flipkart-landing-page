import React from 'react'
import first from './first.webp'
// import second from './second.webp'
import prev from './previous.png'
import next from './next.png'
import './Slider.css'


// let sliderimg= document.querySelector('.btn');
// let images=[first,second];
// let i=0;

// function previous(){
//     if(i<=0) i= images.length;
//     i--;
//     return setImg();
// }
// function next(){

// }
// function setImg(){
//     return sliderimg.setAttribute('src','images/' + images[i]);
// }



function Slider() {
  return (
    <div>
      <div className="slider">
        <button className='btn' id='previous'><img className='navImg' src={prev} id='previmg'/></button>
        <img src={first} id='displayImage'/>
        <button className='btn' id='next'><img className='navImg' src={next} id='nextimg'/></button>
      </div>
    </div>
  )
}

export default Slider
