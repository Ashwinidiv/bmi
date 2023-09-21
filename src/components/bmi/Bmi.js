import React,{useMemo, useState} from 'react'
import './Bmi.css'

const Bmi = () => {
  const[weight, setWeight]= useState(45);
  const [height, setHeight]= useState(70);
  const onweightChange=(event)=>{
    setWeight(event.target.value)

  }
  const onheightChange=(event)=>{
    setHeight(event.target.value)

  }
  const output= useMemo(()=>{
    const calculateHeight= height/100
    return( weight/ (calculateHeight*calculateHeight)).toFixed(1)

  },[weight, height])
  return (
    <main>
      <h1>Calculate Your BMI </h1>
      <div className='input-section'>
        <p className='slider-output'>Weight :{weight} kg</p>
        <input className='input-slider' type='range' step='1' min='40' max='200' onChange={onweightChange}/>

        <p className='slider-output'>Height: {height} cm </p>
        <input className='input-slider' type='range' min='140' max='300' onChange={onheightChange}/>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output }</p>


      </div>
    </main>
  )
}

export default Bmi