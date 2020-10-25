import React, { Component } from "react";
import { Button } from "reactstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      do: true,
      hi:false
    };
    this.setRSelected = this.setRSelected.bind(this);
    // this.fetcing = this.fetcing.bind(this)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.do === nextState.do) {
  //     return false;
  //   }
  //   return true;
  // }
  fetching = () => {
    console.log("fetching started");
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data =>{ console.log(data);this.setState({ hi: true });console.log("DONE");this.setState({ do: true })});
  };
  componentDidMount() {
    console.log("renderBefore");
    this.setState({ do: true });
    console.log("renderAfter");
  }
  setRSelected() {
    console.log("button clicked");
    this.setState({ do: "HEllo" });
    this.fetching();

    console.log("fetching over");
    this.setState({ do: false });
    console.log("1");
    this.setState({ hi: false })
    console.log("fetching done");
  }
  render() {
    console.log("Rendering");
    return (
      <div>
        <Button color="primary" onClick={() => this.setRSelected(1)}>
          One
        </Button>
        {/* <div>{console.log()}</div> */}
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
