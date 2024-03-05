import React from "react";
import TicketComponent from "../TicketComponent/TicketComponent";

let TicketsComponent = (props) => {

    return(
        <div>
            {
                props.combinations.map((combination, index) => (
                    <TicketComponent key={index} combination={combination}/>
                ))
            }
        </div>
    )
}

export default TicketsComponent;