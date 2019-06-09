import React from "react";
import "./style.css";

function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    Return to Home?
                </li>
                <li>
                    Click an image to begin!
                </li>
                <li>
                    Score: {score} | Top Score: {topScore}
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;