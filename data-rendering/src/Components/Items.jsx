import React , { useState } from "react";
import RenderItem from "./RenderItem";
function Items(props) {

// const DummyData = [ 
//         {
//             id : 1,
//             name : "Hilal Ahmad Ganie",
//             address : "Lolab Kalaroos",
//             profession : "Android Developer",
//             experiance : "8-years" ,
//             company : "Google" ,
//             salary : "120000-Monthly",
//             about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque voluptatem illum esse repudiandae laboriosam incidunt accusamus quod, labore in ex! Laudantium labore possimus dolores rem alias corporis, voluptatum harum minus minima expedita deleniti incidunt odit."
//         }
//     ]


  return (
    <div className="flex-row justify-center space-y-8 p-5 items-center">


       {
        props.addDeveloperData.map(
            filteredData => (
                <RenderItem
                    name={filteredData.name}
                    address={filteredData.address}
                    profession={filteredData.profession}
                    experiance={filteredData.experiance}
                    salary={filteredData.salary}
                    company={filteredData.company}
                    about={filteredData.about}
                />
            ))
       }
        {/* <RenderItem 
            name={DummyData[0].name}
            address={DummyData[0].address}
            profession={DummyData[0].profession}
            experiance={DummyData[0].experiance}
            company={DummyData[0].company}
            salary={DummyData[0].salary}
            about={DummyData[0].about}
        ></RenderItem> */}


        {/* {
            props.addDeveloperData.map(
                filteredData =>
                     {
                    <div className="p-5 bg-blue-100 rounded-lg">
                        <div className="">
                            <h1 className="text-center font-medium text-3xl">{filteredData.name}</h1>
                            <h1 className="mt-8 text-[18px] font-medium">{filteredData.address}</h1>
                            <h1 className="text-[18px] font-medium">{filteredData.profession}</h1>
                            <h1 className="text-[18px] font-medium">{filteredData.experiance}</h1>
                            <h1 className="text-[18px] font-medium">{filteredData.company}</h1>
                            <h1 className="text-[18px] font-medium">{filteredData.salary}</h1>
                            <h1 className="my-5 text-justify">{filteredData.about}</h1>
            
                        </div>
            
                        <div className="flex justify-around m-2">
                            <button className="py-2 px-11 bg-blue-slate shadow-lg ring-1 rounded my-2">Read More</button>
                            <button className="py-2 px-11 bg-blue-slate shadow-lg ring-1 rounded my-2">Contect </button>
                        </div>
                    </div>
            })
        }
 */}

       
      
       
    </div>
  )
}

export default Items;
