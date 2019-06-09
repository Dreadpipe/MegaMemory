import React from "react";
import "./style.css";

//some pseudocode to get us started

function RobotCard(props) {
    return ( 
        <div className="card">
            <div 
                className="img-container" 
                key={props.id}
                id={props.id}
                onClick={() => props.handleClick(props.id)}>
                    <img alt={props.name} src={require(`../../images/${props.image}`)}/>
            </div>
        </div>
    );
};

export default RobotCard;