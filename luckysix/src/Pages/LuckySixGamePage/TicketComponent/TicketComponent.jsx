import React from "react";
import '../TicketComponent/TicketComponent.css';

let TicketComponent = () => {

    return(
        <div className="active-ticket">
            <p className="ticket-id-label">Ticket ID: 0000001</p>
            <div className="active-ticket-info">
                <div>
                    <h5>Combination:</h5>
                    <p>22, 23, 24, 25, 26, 27</p>
                </div>
                <div>
                    <h5>Bet:</h5>
                    <p>20.00</p>
                </div>
            </div>
            <button className="btn btn-success">CashOut</button>
        </div>
    )
}

export default TicketComponent;