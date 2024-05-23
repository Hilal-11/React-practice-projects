import React from 'react'
 
function Card(props) {



  return (


    props.card.map(
        filteredData => (
        <div className='flex-col w-[400px] h-[auto] justify-center items-center rounded shadow-2xl shadow-gray-400 ring-1 p-2'>
            <div className='flex justify-center'>
                <img className='w-44 h-44 rounded-full' src={filteredData.image} alt="Image" />
            </div>
            <div className='flex-col  text-center p-5'>
                <h2 className='text-4xl font-medium'>{filteredData.professio}</h2>
                <h2 className='text-2xl font-normal'>{filteredData.name}</h2>
            </div>
            <div className='flex justify-center text-justify p-5'>
                <p>{filteredData.about}</p>
            </div>
            <div className='flex justify-around my-2'>
                <button className='px-6 py-1  bg-blue-100 rounded hover:bg-blue-300'>Read More</button>
                <button className='px-6 py-1  bg-blue-100 rounded hover:bg-blue-300'>Contect</button>
            </div>
        </div>

    ))


    
  )
}

export default Card
