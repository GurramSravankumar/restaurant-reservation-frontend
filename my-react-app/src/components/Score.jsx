import "../styles/Score.css"
function Score ({value}) {
    return ( 
        <div className="score-block">
              <h1 className="score">{value}</h1>
        </div>
     );
}

export default Score;