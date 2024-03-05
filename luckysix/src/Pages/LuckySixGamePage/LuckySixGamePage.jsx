import React, { useState } from "react";
import NumberCircle from "./NumberCircle/NumberCircle";
import '../LuckySixGamePage/LuckySixGamePage.css';
import CreateTicketComponent from "./CreateTicketComponent/CreateTicketComponent";
import TicketsComponent from "./TicketsComponent/TicketsComponent";
function LuckySixGamePage(props){
    const[data, setData] = useState(props.data);
    const[selectedNumbers, setSelectedNumbers] = useState([]);
    let ticketCompleted = selectedNumbers.length >= 6 ? true : false;

    function AddRemoveNumbers(isSeleted, number){
        if(isSeleted){
            setSelectedNumbers(prevSelectedNumbers => [...prevSelectedNumbers, number]);
        }else{
            setSelectedNumbers(prevSelectedNumbers => prevSelectedNumbers.filter(item => item.number !== number.number));
        }
    }
    return(
        <div className="lucky-six-game-page text-white">
            <div className="game-container">
                <h1>Lucky six game page</h1>
                <div className="grid-container">
                    {data.map((number, index) => (
                        <NumberCircle key={index} number={number.value} color={number.color} clickmethod={AddRemoveNumbers}/>
                    ))}
                </div>
                <div className="create-ticket-container">
                    <CreateTicketComponent ticketCompleted={ticketCompleted} selectedNumbers={selectedNumbers}/>   
                </div>
            </div>
            <div className="tickets-container">
                <TicketsComponent />
            </div>  
        </div>
    )
}

export default LuckySixGamePage;