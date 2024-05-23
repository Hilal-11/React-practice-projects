import React ,{ useState }  from "react";
function Practice (props) {

    // const newTitle = props.title;
    const[newtitle , setNewTitle] = useState("");
    
    const[title , setTitle] = useState(props.title);

  
    const InputHandler = (event) => {
        setNewTitle(event.target.value);
        event.target.value = " ";
    }


    const ChangeTitle = () =>{
        setTitle(newtitle);

        setNewTitle("");
    }

    return (
    
        <div className="container">

        
            <div className="w-full flex bg-slate-300 p-10 justify-between">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="input_box">
                    <input className="border px-5 py-2 rounded" type="text" value={newtitle} onChange={  InputHandler }  placeholder="Enter Title"/>
                </div>
                <button className="bg-[orange] p-2 rounded-[5px] font-bold" 
                    onClick={ ChangeTitle }
                >Change Title</button>
            
            </div>
        </div>
    )
}

export default Practice;