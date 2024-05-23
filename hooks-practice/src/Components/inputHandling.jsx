import React , { useState } from "react";
function InputHandling( props ) {

const [newName , setNewName] = useState("");
const [newAddress , setNewAddress] = useState("");
const [newExp , setNewExp] = useState("");
const [newDOB , setNewDOB] = useState("");
const [newSalary , setNewSalary] = useState("");

const HandleName = (event) => {
    setNewName(event.target.value)
    // console.log(event.target.value)
}


const HandleAddress = (event) => {
    setNewAddress(event.target.value);
    // console.log(event.target.value)
}


const HandleExp = (event) => {
    setNewExp(event.target.value);
    // console.log(event.target.value)
}


const HandleDOB = (event) => {
    setNewDOB(event.target.value);
    // console.log(event.target.value)
}


const HandleSalary = (event) => {
    setNewSalary(event.target.value)
    // console.log(event.target.value)
}



const formSubmitHandler = (event) => {
    
    const data = {
        name : newName,
        address : newAddress,
        experiance: newExp,
        dob : newDOB , 
        salary : newSalary
    };

    props.FetchingChildData(data);

    console.log(data);

    
    event.preventDefault();


    setNewName("");
    setNewAddress("");
    setNewExp("");
    setNewDOB("");
    setNewSalary("");
}
    return (
        <div className="container grid-cols rounded">
            <form onSubmit={ formSubmitHandler }>
                <div className="flex flex-wrap gap-8 bg-slate-300 p-10">

                    <div className="">
                        <input className="py-2 px-4 w-[230px] rounded" type="text" placeholder="Enter Name :- " onChange={ HandleName } value={ newName }/>
                    </div>

                    <div className="">
                        <input className="py-2 px-4 w-[230px] rounded" type="text" placeholder="Enter Address :- " onChange={ HandleAddress } value={ newAddress }/>
                    </div>

                    <div className="">
                        <input className="py-2 px-4 w-[230px] rounded" type="text" placeholder="Enter Experiance :- " onChange={ HandleExp }value={ newExp } />
                    </div>

                    <div className="">
                        <input className="py-2 px-4 w-[230px] rounded" type="date" placeholder="Enter DOB :- " onChange={ HandleDOB } value={ newDOB }/>
                    </div>

                    <div className="">
                        <input className="py-2 px-4 w-[230px] rounded" type="number" placeholder="Enter Salary :- " onChange={ HandleSalary } value={ newSalary }/>
                    </div>

                    <div>
                        <button className="w-[230px] bg-slate-700 text-white px-10 py-2 rounded font-bold">Add Data</button>
                    </div>
                </div>
            </form>
        <br /><br />

        
        </div>
    )
}
export default InputHandling;