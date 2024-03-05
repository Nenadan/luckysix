import React from "react";
import '../TicketComponent/TicketComponent.css';

let TicketComponent = (props) => {

    return(
        <div className="active-ticket">
            <p className="ticket-id-label">Ticket ID: {props.combination.id}</p>
            <div className="active-ticket-info">
                <div>
                    <h5>Combination:</h5>
                    <div className="combination-array">
                    {
                        props.combination.numbers.map((number, index)=>(
                            <p key={index} className="ticket-combination-numer">{number.number}</p>
                        ))
                    }
                    </div>
                </div>
                <div>
                    <h5>Bet:</h5>
                    <p>{props.combination.amount}</p>
                </div>
            </div>
            <button className="btn btn-success">CashOut</button>
        </div>
    )
}

export default TicketComponent;