import React from 'react'

function RenderItem(props) {


  return (
    <div>
        <div className="p-5 bg-blue-100 rounded-lg lg:w-[60%]">
                        <div className="">
                            <h1 className="text-center font-medium text-3xl">{props.name}</h1>
                            <h1 className="mt-8 text-[18px] font-medium">{props.address}</h1>
                            <h1 className="text-[18px] font-medium">{props.profession}</h1>
                            <h1 className="text-[18px] font-medium">{props.experiance}</h1>
                            <h1 className="text-[18px] font-medium">{props.company}</h1>
                            <h1 className="text-[18px] font-medium">{props.salary}</h1>
                            <h1 className="my-5 text-justify">{props.about}</h1>
            
                        </div>
            
                        <div className="flex justify-around m-2">
                            <button className="py-2 px-11 bg-blue-slate shadow-lg ring-1 rounded my-2">Read More</button>
                            <button className="py-2 px-11 bg-blue-slate shadow-lg ring-1 rounded my-2">Contect </button>
                        </div>
                    </div>
    </div>
  )
}

export default RenderItem
