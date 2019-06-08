import React from 'react';
import robots from "./robotcard.json"
import './App.css';

class App extends Component {
  state = {
    robots
  };

  render(){
    return (
      <Wrapper />
    );
  }
};

export default App;
