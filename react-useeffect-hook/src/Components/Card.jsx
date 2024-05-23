import React from 'react'

function Card(props) {

  const gameCardData = props.mappingData;
  return (
    <div className=''>
        <div className='p-5 bg-slate-700 rounded-xl shadow-2xl ring-1 text-white'>
          <div>
            <img className="w-[100%] h-[330px] rounded-xl" src={gameCardData.image} alt="" />
          </div>
          <div className='my-5 grid grid-cols-2 items-center justify-center text-center gap-2'> 
            <p className=' text-2xl font-bold'>{gameCardData.title}</p>
            <p className=' text-2xl font-bold '>{gameCardData.creator}</p>
            <p className=' text-lg font-bold '>{gameCardData.rating}</p>
            <p className=' text-lg font-bold '>{gameCardData.year}</p>
          </div>
          <div>
            <p className=' text-justify font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut officia tempore voluptates ea perspiciatis aspernatur quos fugiat quisquam quae, unde, nihil totam necessitatibus aperiam nostrum velit non.</p>
          </div>
        </div>
    </div>
  )
}

export default Card
