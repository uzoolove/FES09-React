import { Component } from "react";
import ChildComponent from './FunctionBase';

class App extends Component{
  render(){
    return (
      <ChildComponent />     
    );
  }
}

// function App(){
//   return (
//     <h1>Hello Class Component</h1>
//   );
// }

export default App;