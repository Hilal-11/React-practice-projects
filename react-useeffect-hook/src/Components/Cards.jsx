import React from 'react'
import Card from './Card';
function Cards(props) {

  const receivedData = props.ApiResponse;
  return (
    <div className='p-4 my-8 grid grid-cols-1 w-[100%] mx-auto gap-20 justify-center items-center'>
      {
        receivedData.map((filteredGames) => (
          <Card mappingData={filteredGames} key={filteredGames.id}></Card>
        ))
      }
    </div>
  )
}

export default Cards
