import React, { useState } from "react";
import NumberTileComponent from "./NumberTileComponent/NumberTileComponent";
import NumberCircle from "./NumberCircle/NumberCircle";
import '../LuckySixGamePage/LuckySixGamePage.css';
function LuckySixGamePage(props){
    const[data, setData] = useState(props.data);
    const[selectedNumbers, setSelectedNumbers] = useState([]);

    function AddRemoveNumbers(isSeleted, number){
        if(isSeleted){
            setSelectedNumbers(prevSelectedNumbers => [...prevSelectedNumbers, number]);
        }else{
            setSelectedNumbers(prevSelectedNumbers => prevSelectedNumbers.filter(item => item !== number));
        }
        console.log(selectedNumbers);
    }
    return(
        <div className="text-white">
            <h1>Lucky six game page</h1>
            {
                selectedNumbers.map((number, index)=>(
                    <h1 key={index}>{number}</h1>
                ))
            }
            <div className="grid-container">
                {data.map((number, index) => (
                    <NumberCircle key={index} number={number.value} color={number.color} clickmethod={AddRemoveNumbers}/>
                ))}
            </div>
            
            <NumberTileComponent number={48} multiplier={10000} color="red"/>
            <NumberTileComponent number={47} multiplier={7500} color="blue"/>
        </div>
    )
}

export default LuckySixGamePage;