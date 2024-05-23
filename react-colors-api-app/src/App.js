import React , {useState , useEffect} from "react"
import Colors from "./Components/Colors"
import Dexcription from "./Components/Dexcription";
import './App.css'
export default function App() {

  const [data , setData] = useState("");

   const fetchAPIcolors = async () => {
    const response = await fetch('https://api.sampleapis.com/csscolornames/colors');
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    fetchAPIcolors();
  },[]);
  return (
    <div className="bg-slate-800 text-white">

      <div className="shadow_box1">
      </div>
      <div className="shadow_box2">
      </div>
      <div className="shadow_box3">
      </div>

      <Dexcription></Dexcription>
      <Colors Colors={data} id={data.id}></Colors>
    </div>
  )
}