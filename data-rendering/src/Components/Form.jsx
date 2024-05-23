import React , { useState } from 'react'

function Form(props) {
const[ newInputName , setnewInputName ] = useState("");
const[ newInputAddress , setnewInputAddress ] = useState("");
const[ newInputProf , setnewInputProf ] = useState("");
const[ newInputExp , setnewInputExp ] = useState("");
const[ newInputSalary , setnewInputSalary ] = useState(""); 
const[ newInputCompany , setnewInputCompany ] = useState(""); 
const[ newInputAbout , setnewInputAbout ] = useState(""); 



const HandleInputName = ( event ) => {
    setnewInputName(event.target.value)
   
}

const HandleInputAddress = ( event ) => {
    setnewInputAddress(event.target.value)
        
}

const HandleInputProfession = ( event ) => {
    setnewInputProf(event.target.value)
    
}

const HandleInputExperiance = ( event ) => {
    setnewInputExp(event.target.value)
        
}

const HandleInputSalary = ( event ) => {
    setnewInputSalary(event.target.value)
    
}

const HandleInputCompany = ( event ) => {
    setnewInputCompany(event.target.value)
    
}

const HandleInputAbout = (event) => {
    setnewInputAbout(event.target.value);
}


const HandleSubmitForm = ( event ) => {

    const userInputData = {
       name : newInputName,
       addresss : newInputAddress,
       profession : newInputProf,
       experiance : newInputExp , 
       salary : newInputSalary,
       company : newInputCompany,
       about : newInputAbout

    }
    console.log(userInputData);


    props.receiveChildData(userInputData);
    event.preventDefault();


    setnewInputName("");
    setnewInputAddress("");
    setnewInputProf("");
    setnewInputExp("");
    setnewInputSalary("");
    setnewInputCompany("");
    setnewInputAbout("")

}




  return (
   <div className='bg-blue-100 p-6 rounded shadow-md ring-1 lg:w-[60%]'>
        <form onSubmit={ HandleSubmitForm } className='flex flex-wrap gap-6 '>
            <div>
                <input className='px-8 py-3 rounded' type="text" placeholder='Enter Name :- ' onChange={ HandleInputName } value={ newInputName } />
            </div>
            <div>
                <input className='px-8 py-3 rounded' type="text" placeholder='Enter Address :- ' onChange={ HandleInputAddress } value={ newInputAddress } />
            </div>
            <div>
                <input className='px-8 py-3 rounded' type="text" placeholder='Enter Profession :- ' onChange={ HandleInputProfession } value={ newInputProf } />
            </div>
            <div>
                <input className='px-8 py-3 rounded' type="text" placeholder='Enter Experiance :- ' onChange={ HandleInputExperiance } value={ newInputExp } />
            </div>
            <div>
                <input className='px-8 py-3 rounded' type="number" placeholder='Enter Salary :- ' onChange={ HandleInputSalary } value={ newInputSalary }/>
            </div>
            <div>
                <input className='px-8 py-3 rounded' type="taxt" placeholder='Enter Company :- ' onChange={ HandleInputCompany } value={ newInputCompany } />
            </div>

            <div>
                <input className='px-8 py-3 rounded' type="taxt" placeholder='About Info :- ' onChange={ HandleInputAbout } value={ newInputAbout} />
            </div>


            <div className='w-[100%] flex justify-center' >
                <input className='px-[8rem] py-3 rounded bg-slate-900 text-white ' type="submit"/>
            </div>
        </form>
   </div>
  )
}

export default Form
