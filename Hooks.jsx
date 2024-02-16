import React,{useState} from "react";

function Hooks() {
    const [color,setColor]=useState("red")
        return (
            <div>
                <h1>{color}</h1>
                <button onClick={()=>setColor("blue")}>Blue</button>
                <button onClick={()=>setColor("orange")}>orange</button>
                <button onClick={()=>setColor("black")}>black</button>
            </div>
        );
    }

 
export default Hooks;