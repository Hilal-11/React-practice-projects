import Card from "./Components/Card";
import cardData from "./Api_Data";
export default function App() {
  return (
  <div className="grid grid-cols-1 justify-evenly gap-10 w-[100%] mx-auto p-24 md:grid-cols-3 w-[80%]">

      <Card card={cardData}></Card>
      
  </div>
  )
}