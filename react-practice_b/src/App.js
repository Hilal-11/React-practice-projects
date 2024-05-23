import {  ImHammer2  } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import youtube_courses from "./Components/Json";
import Video_thumb_Nail from "./Components/Video_thumb_Nail";
export default function App() {

  const NotifyMe = () => {
    toast("Wow !!! Awesome")
  }





  return (
   <div className=" bg-slate-600 text-white h-screen">
      <div>
          <button className="text-4xl" onClick={NotifyMe}><ImHammer2></ImHammer2></button>
          <ToastContainer position="top-left"></ToastContainer>

          <Video_thumb_Nail fetch_data={ youtube_courses }></Video_thumb_Nail>

      </div>
   </div>
  )
}