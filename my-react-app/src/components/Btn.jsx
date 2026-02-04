import "../styles/Btn.css"
function Btn({Inc,Dec,Reset}) {
    return (  
        <div className="btn-block">
            <button className="btn" onClick={Inc}>+1</button>
            <br></br>
            <button className="btn" onClick={Dec}>-1</button>
            <button className="btn" onClick={Reset}>Reset</button>
        </div>
    );
}

export default Btn;