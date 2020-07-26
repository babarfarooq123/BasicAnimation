import React from 'react';
import './App.css';
import image from './cloud.png';
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
// import plane from './plane.png';
import Plane from './plane';

function App() {
  const {ref, playState, getAnimation} = useWebAnimations({
    keyframes: [
      {transform: 'translate(1500px,0)'},
      {transform: 'translate(-100%,0)'},
    ],
    timing: {
      duration: 6000,
      iterations: Infinity,
    }
  })

  // const {ele} = useWebAnimations({
  //   keyframes: [
  //     {transform: 'translate(-100%,0)'},
  //     {transform: 'translate(1200px,0)'},
  //   ],
  //   timing: {
  //     duration: 3000,
  //     iterations: Infinity,
  //   }
  // })

  return (
    <div className="App">
      <div ref={ref}>
        <img src={image} alt='Cloud image' />
        <img src={image} alt='Cloud image' />
        <img src={image} alt='Cloud image' />
      </div>
      <div className='btndiv'>
        <button className='btn' onClick={()=>{getAnimation().play()}}>Play Cloud.</button>
        <button className='btn' onClick={()=>{getAnimation().pause()}}>Pause Cloud.</button>
      </div>
      {/* <div ref={ele}>
        <img width='120px' height='70px' src={plane} alt='Place image' />
      </div> */}
    <Plane />
    </div>
  );
}

export default App;
