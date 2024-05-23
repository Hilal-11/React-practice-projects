import React , { useState } from "react"
import Form from "./Components/Form"
import Items from "./Components/Items"
const DummyData = [ 
  {
            id : 1,
            name : "Hilal Ahmad Ganie",
            address : "Lolab Kalaroos",
            profession : "Android Developer",
            experiance : "8-years" ,
            company : "Google" ,
            salary : "120000-Monthly",
            about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque voluptatem illum esse repudiandae laboriosam incidunt accusamus quod, labore in ex! Laudantium labore possimus dolores rem alias corporis, voluptatum harum minus minima expedita deleniti incidunt odit."
        }
]
export default function App() {


  const[newData , renderNewData] = useState(DummyData);


  const FetchEnteredChildData = (developersData) => {
    const FinalRecevedData = [developersData , ...DummyData];
    renderNewData(FinalRecevedData);


  }   

  // console.log(DummyData)

  return (
    <div className="border p-5 flex-col">
      <Form receiveChildData={FetchEnteredChildData}></Form>
      <Items addDeveloperData={newData}></Items>
    </div>
  )
}