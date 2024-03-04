import React, { useState } from "react";
import NumberTileComponent from "./NumberTileComponent/NumberTileComponent";
import NumberCircle from "./NumberCircle/NumberCircle";

function LuckySixGamePage(props){
    const[data, setData] = useState(props.data);
    console.log(data);

    return(
        <div className="text-white">
            <h1>Lucky six game page</h1>
            {data.map((number, index) => (
                <NumberCircle key={index} number={number.value} color={number.color}/>
            ))}
            
            <NumberTileComponent number={48} multiplier={10000} color="red"/>
            <NumberTileComponent number={47} multiplier={7500} color="blue"/>
        </div>
    )
}

export default LuckySixGamePage;