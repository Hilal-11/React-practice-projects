import React , { useState } from "react";
import './Theme.css';
function Theme() {

    const [light , setLight] = useState("");
    const [dark , setDark] = useState("");
    const [system , setSystem] = useState("");


    const LightThemeHandler = () => {
        const color = "#ffffff";
        setLight(color)
    document.body.style.background = light;
    document.body.style.color = dark;
    
        
    }
    const DarkThemeHandler = () => {
        const color = "#222222";
        setDark(color)
    document.body.style.background = dark;
    document.body.style.color = light;



    }
    const SystemThemeHandler = () => {
        const color = "#eee0c6";
        setSystem(color)
    document.body.style.background = system;
    document.body.style.color = light;


    }
 
    return (
        <div className="container">
            <div className="theme_box">
                        <button onClick={ LightThemeHandler }>Light Theme</button>
                        <button onClick={ DarkThemeHandler }>Dark Theme</button> 
                        <button onClick={ SystemThemeHandler }>System Theme</button>
            </div>
        
        </div>
    )
}

export default Theme;