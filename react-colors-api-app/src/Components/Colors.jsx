import React , {useState , useEffect} from 'react'
import Color_Boxes from './Color_Boxes'
function Colors( props ) {
    const colors = props.Colors;
    console.log(colors);
  return (
    <div className='flex flex-wrap gap-20 mx-auto w-[80%] flex justify-center p-10'>
        {
            colors.map((filteredColors) =>
            (
                <div key={filteredColors} className='flex-col place-content-evenly'>
                    
                <Color_Boxes colorsData={filteredColors} id={filteredColors.id}></Color_Boxes>
                <div className=' flex justify-around py-2'>
                    <h2 className='font-bold ring-1 rounded-full px-10 py-1 shadow-2xl'>{filteredColors.name}</h2>
                    <h2 className='font-bold ring-1 rounded-full px-10 py-1 shadow-2xl'>{filteredColors.hex}</h2>
                </div>

                </div>
            ))
        }
    </div>



// {
//     colors.map((filteredColors) =>
//     (

//         <Color_Boxes colorsData={filteredColors} id={filteredColors.id}></Color_Boxes>
        
//     ))
//    }


  )
}

export default Colors
