import react from "react";
import '../CreateTicketComponent/CreateTicketComponent.css'

export default function CreateTicketComponent(props){

    return(
        <div className="create-ticket-component">
            <h3>Create ticket</h3>
            <div className="selected-numbers">
                {
                    props.selectedNumbers.map((number, index)=>(
                        <h1 key={index}>{number}</h1>
                    ))
                }
            </div>
            <button className="btn btn-primary">Add combination</button>
        </div>
    )
}