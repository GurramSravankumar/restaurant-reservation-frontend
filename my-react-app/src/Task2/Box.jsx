import "./Box.css"
function Box( {color}) {
    return (  
        <div className="box" style={{backgroundColor: color}}>
            {color}
        </div>
    );
}
export default Box;