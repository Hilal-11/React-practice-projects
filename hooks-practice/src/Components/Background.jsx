import React , { useState } from "react"
function Background() {

    const[color  , setColor] = useState("#ffffff");

    const HandleInpuData = (event) => {
        const storeColor = event.target.value;
        setColor(storeColor);
    }

    const HandleChange = () => {
        document.body.style.background = color;
        
    }   

    const showColor = color;

    

    return (
        <div className="container">  
            <input type="text" onChange={ HandleInpuData }/> 
            <button onClick={ HandleChange }>Change Background</button>
            <h1>Color Name = {showColor}</h1>
        </div>
    )
}

export default Background;