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
        <div onClick={CircleClicked} className={className} style={{border: `3px solid ${props.color}`}}>
            <h3>{number}</h3>
        </div>
    )
}

export default NumberCircle;