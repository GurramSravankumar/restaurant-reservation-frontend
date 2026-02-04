import { useState } from "react";
import Box from "./Box";
import Btn from "./Btn";
import "./Final.css"
function Final() {
    const [color,setColor] = useState("red");
    function  colorToggle(){
        setColor(prev=>(prev === "red"?"blue":"red"))
    }
    return ( 
        <div className="final">
         <Box color={color}/>
         <Btn colorToggle={colorToggle}/>
        </div>
     );
}

export default Final;