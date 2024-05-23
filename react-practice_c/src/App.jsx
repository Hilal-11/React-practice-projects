// import { useState } from "react";
import Tour_Data from "./Components/TourData";
import Tour_Card from "./Components/Tour_Card";
function App() {

  if(Tour_Data.length === 0) {
   return (
    <div>
      <div>
        <h2>No Tour Left</h2>
      </div>
      <div>
        <button>Refresh</button>
      </div>
    </div>
   )
  }

  
  return (
    <div className="bg-slate-600">
      <Tour_Card tourData={Tour_Data}/>
    </div>
  )
}
export default App;