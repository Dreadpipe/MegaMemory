import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="/">
                    reset!
                    </a>
                </li>
                <li>
                    Click an image to begin!
                </li>
                <li>
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;