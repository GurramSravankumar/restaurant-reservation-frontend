
import "./Btn.css"
function Btn({colorToggle}) {
    return ( 
        <div >
            <button className="btn" onClick={colorToggle}> change color</button>
        </div>
     );
}
export default Btn;