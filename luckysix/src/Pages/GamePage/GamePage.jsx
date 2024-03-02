import React from "react";
import LuckySixGamePage from "../LuckySixGamePage/LuckySixGamePage";
import jsonData from '../../assets/data/Numbers.json';

function GamePage(){
    return(
        <div>
            <LuckySixGamePage data={jsonData}/>
        </div>
    )
}

export default GamePage;