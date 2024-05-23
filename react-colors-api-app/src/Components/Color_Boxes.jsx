import React from 'react'
import './Colors.css';
function Color_Boxes(props) {
    const newColors = props.colorsData;
  return (
    <div className='w-[100%]'>
        <div className='py-10 w-[400px] h-[180px] rounded-xl ring-1 text-center text-white font-bold shadow-2xl'  
        id='color_boxes'
        style={{
            backgroundColor : newColors.hex
        }}>
            {/* <h2>{newColors.name}</h2>
            <h2>{newColors.hex}</h2> */}

        </div>
    </div>
  )
}

export default Color_Boxes
