import React, { useState } from "react";
import NumberCircle from "./NumberCircle/NumberCircle";
import '../LuckySixGamePage/LuckySixGamePage.css';
import CreateTicketComponent from "./CreateTicketComponent/CreateTicketComponent";
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
            <div className="grid-container">
                {data.map((number, index) => (
                    <NumberCircle key={index} number={number.value} color={number.color} clickmethod={AddRemoveNumbers}/>
                ))}
            </div>
            <CreateTicketComponent selectedNumbers={selectedNumbers}/>     
        </div>
    )
}

export default LuckySixGamePage;