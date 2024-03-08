import { Component } from "react";
import ChildComponent from './Lifecycle';

class App extends Component{
  render(){
    return (
      <ChildComponent />     
    );
  }
}

export default App;