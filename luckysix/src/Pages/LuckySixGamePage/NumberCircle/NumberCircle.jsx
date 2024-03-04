import React, { useState } from "react";
import '../NumberCircle/NumberCircle.css';

function NumberCircle(props){

    const [number, setNumber] = useState(props.number);
    const [isSeleted, setIsSelected] = useState(props.selected ? true : false);
    const [className, setClassName] = useState(isSeleted ? "number-circle number-circle-selected" : "number-circle number-circle-not-selected")

    function CircleClicked(){
        setIsSelected(!isSeleted);
        if(isSeleted){
            setClassName("number-circle number-circle-selected");
        }else{
            setClassName("number-circle number-circle-not-selected");
        }
    }

    return(
        <div onClick={CircleClicked} className={className} style={{border: `3px solid ${props.color}`, backgroundColor: isSeleted ? props.color : `rgba(34, 46, 53, 0.3)` }}>
            <h3 className="number-value" style={{color: isSeleted ? "black" : `rgba(255, 255, 255, 0.3)` }}>{number}</h3>
        </div>
    )
}

export default NumberCircle;