import Score from "./Score";
import Btn from "./Btn";
import { useState } from "react";
function Final() {
    const [score,setScore] = useState(0); 
    function inc(){
        setScore(prev=>prev+1);
    }
    function dec(){
        setScore(prev=>prev-1);
    }
    function reset(){
        setScore(0);
    }

    return ( 
       <div>
        <Score value={score}/>
        <Btn  Inc={inc} Dec={dec} Reset={reset} />
       </div>
     );
}

export default Final;