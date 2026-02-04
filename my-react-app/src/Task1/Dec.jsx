import "./Score.css"
function  Dec ({dec}) {
    return (  
       <div className="btn-class">
            <button className="btn" onClick={dec}> -1</button>
        </div>
    );
}

export default Dec;