import React from 'react'

function Filter(props) {
  const courses = props.filterData;
  return (
    <div className=' w-[80%] mx-auto flex justify-center flex-wrap p-5 gap-10 items-start content-start'>

      {
        courses.map( 
          (filteredCourses) => (
                <button className='text-md font-mono font-bold px-10 py-2 rounded-md bg-blue-200 shadow-md' key={filteredCourses.id}>{filteredCourses.title}</button>
          )
        )
      }

    </div>
  )
}

export default Filter
