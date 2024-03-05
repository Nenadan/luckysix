import react, { useState } from "react";
import '../CreateTicketComponent/CreateTicketComponent.css'

export default function CreateTicketComponent(props){
    const[amount, setAmount] = useState(null);

    function AddCombination(){
        let sortedNumbers = [...props.selectedNumbers].sort((a, b) => a.number - b.number);
        let newCombination = {
            id: '00000001',
            numbers: sortedNumbers,
            amount: amount
        };
        console.log(newCombination);
        props.setCombination(newCombination);
    }
    return(
        <div className="create-ticket-component">
            <h3>Create ticket</h3>
            <div className="selected-numbers">
                {
                    props.selectedNumbers.map((number, index)=>(
                        <h1 key={index} style={{color: number.color}}>{number.number}</h1>
                    ))
                }
            </div>
            <input onChange={(e) => setAmount(e.target.value)} className="form-control" type="number" placeholder="Insert amount"></input>
            <button onClick={AddCombination} disabled={!props.ticketCompleted} className="btn btn-primary mt-2">Add combination</button>
        </div>
    )
}