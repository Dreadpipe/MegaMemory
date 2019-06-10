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

    

    componentDidMount() {
        const robots = this.state.robots;
        const shuffledArray = this.state.robots.sort(robot => Math.random() -0.5);
        this.setState({ robots: shuffledArray });
    };


    handleClick = id => {
        let clickedArray = this.state.clicked;
        const shuffledArray = this.state.robots.sort(robot => Math.random(robot) -0.5);
        this.setState({ robots: shuffledArray });
            if (clickedArray.includes(id)) {
                this.setState({ score: 0 });
                console.log("Ya fucked up!");
                clickedArray = [];
                console.log(clickedArray);
                return clickedArray;
            } else {
                this.setState({ score: this.state.score + 1 })
                clickedArray.push(id);
                return clickedArray;
            }
        
        
    }



    // renders to virtual DOM
    render() {
        return (
            <div>
                <NavBar 
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Header>
                        Play the Mega Man 2 Memory Game!
                    <p>
                        Click a character, but don't click the same one twice!
                    </p> 
                    </Header>
                <div className="container">
                    {this.state.robots.map(robot => (
                        <RobotCard 
                            key={robot.id}
                            id={robot.id}
                            alt={robot.name}
                            src={robot.src}
                            handleClick={this.handleClick}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    };
};

export default Main;