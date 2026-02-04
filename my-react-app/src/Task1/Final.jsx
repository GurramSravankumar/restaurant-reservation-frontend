import Score from "./Score";
import Inc from "./Inc";
import Dec from "./Dec";
import { useState } from "react";
function Final () {
    const [score,setscore] = useState(0);// two values provide  variable  function , const [varible,fun]

    function inc(){
        setscore(prev=>prev+1);
    }
    function dec(){
        setscore(prev=>prev-1);
    }
    function reset(){
        setscore(prev => 0);
    }

    return ( 
        <div>
           <Score sco={score}/>
           <Inc inc={inc}/>
           <Dec dec={dec}/>
        </div>
     );
}

export default Final;