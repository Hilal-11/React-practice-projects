import { useState , useEffect } from "react";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
// import { data } from "./FilteredData";
function App() {
  const[flag , setFlag] = useState(false);
  const [ApiData , setApiData] = useState([]);


  const fetchData = async () => {
    setFlag(false);
    const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
    const jsonFormat = await response.json();

    setApiData(jsonFormat);
    setFlag(true);
  }

  useEffect(() => {
    fetchData();
  },[]);

  
  return (
   <div className=" h-[auto] mx-auto text-black p-2">
        <div>
          <Navbar></Navbar>
        </div>

        {
          <div>
            {
             flag ? ( <Cards ApiResponse={ApiData}/> ) : ( <Spinner/> )     
            }     
          </div>
        }

   </div>
  )
}
export default App;