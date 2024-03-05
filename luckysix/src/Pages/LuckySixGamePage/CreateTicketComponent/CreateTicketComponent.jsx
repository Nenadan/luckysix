import react from "react";
import '../CreateTicketComponent/CreateTicketComponent.css'

export default function CreateTicketComponent(props){

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
            <input className="form-control" type="number" placeholder="Insert amount"></input>
            <button disabled={!props.ticketCompleted} className="btn btn-primary">Add combination</button>
        </div>
    )
}