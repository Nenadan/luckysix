import React, { useState } from "react";
import '../NumberCircle/NumberCircle.css';

function NumberCircle(props){

    const [number, setNumber] = useState(props.number);

    return(
        <div className="number-circle" style={{border: `3px solid ${props.color}`}}>
            <h3>{number}</h3>
        </div>
    )
}

export default NumberCircle;