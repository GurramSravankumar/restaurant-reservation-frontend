import "./Score.css"
function Inc({inc}) {
    return ( 
        <div className="btn-class">
            <button className="btn" onClick={inc}> +1</button>
        </div>
     );
}
export default Inc;