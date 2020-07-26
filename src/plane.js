import React from 'react';
import './App.css';
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import plane from './plane.png';

function Plane() {
  const {ref, playState, getAnimation} = useWebAnimations({
    keyframes: [
      {transform: 'translate(-100px,15px)'},
      {transform: 'translate(100px,0)'},
      {transform: 'translate(400px,-100px)'},
      {transform: 'translate(800px,-100px)'},
      {transform: 'translate(1100px,20px)'},
      {transform: 'translate(1400px,20px)'},
    ],
    timing: {
      duration: 7000,
      iterations: Infinity,
      easing: 'ease-in-out',
    }
  })

  return (
    <div className="App">
      <div ref={ref}>
        <img width='120px' height='70px' src={plane} alt='Place image' />
      </div>
      <div className='runway'>
          <hr className='hrwhite' />
      </div>
    
    </div>
  );
}

export default Plane;
