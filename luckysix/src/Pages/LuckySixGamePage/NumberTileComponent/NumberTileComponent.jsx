import React, { useState } from "react";
import './NumberTileComponent.css'

function NumberTileComponent(props){

    const [number, setNumber] = useState(props.number);
    const [multiplier, setMultiplier] = useState(props.multiplier);

    return(
        <div className="number-tile-component text-white d-flex">
            <div className="tile-number" style={{border: `3px solid ${props.color}`}}>
                <h3>{number}</h3>
            </div>
            <div className="multiplier-tab">
                <h3>{multiplier}</h3>
            </div>
        </div>
    )
}

export default NumberTileComponent;