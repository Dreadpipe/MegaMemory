import robots from "../../robotcard.json";
import React, { Component } from "react";
import "./style.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import RobotCard from "../RobotCard/RobotCard";
import Footer from "../Footer/Footer";
// robotcards.json goes here, as state will be located here
// This will hold a container that will hold the RobotCards, and append as a list
// js goes here that handles card distribution

// global varialbes here, like score

class Main extends Component {

    state ={
        robots,
        score: 0,
        topScore: 0,
        clicked: [],
        
    };

//need to 
// 1) shuffle when clicked
// 2) update array when shuffled
// 3) reset score when matching id is clicked
// 4) increase score by 1 when non-id is clicked

// Study group ftw: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

        // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
        return array;
        };





    // renders to virtual DOM
    render() {
        return (
            <div>
                <NavBar 
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Header />
                    {this.state.robots.map(robot => (
                        <RobotCard 
                            key={robot.id}
                            id={robot.id}
                            alt={robot.name}
                            src={robot.image}
                            handleClick={this.handleClick}
                        />
                    ))}
                <Footer />
            </div>
        )
    };
};

export default Main;