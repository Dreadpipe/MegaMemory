import React from "react";
import "./style.css";

// This will hold the NavBar and the welcome banner

function Header(props) {
    return (
        <h1 className="header">{props.children}</h1>
    )
};

export default Header;