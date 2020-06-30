import React, { Component } from "react";
import { Button } from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      do: true
    };
    this.setRSelected = this.setRSelected.bind(this)
    // this.fetcing = this.fetcing.bind(this)
 }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.do === nextState.do ){
      return false
    }
    return true
  }
  fetching = () =>{
    console.log("fetching started")
    return fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(data => console.log(data));
  
  }
  componentDidMount() {
    console.log("renderBefore")
    this.setState({ do: true });
    console.log("renderAfter")
  }
  setRSelected(){
    this.setState({ do: "HEllo" });
    const fetched = this.fetching();
    console.log("fetching done")
    return fetched;
    
  }
  render() {
    console.log("Rendering")
    return (
      <div>
        <Button color="primary" onClick={() => this.setRSelected(1)} >One</Button>
      {/* <div>{console.log()}</div> */}
      <h1>Hi</h1>
      </div>
    )
  }
}

export default App;
