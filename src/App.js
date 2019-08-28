import React from "react";
import "./App.css";
import posed, { PoseGroup } from "react-pose";
import aaa from "./css/aaa.mp3";

const speed1 = 7000;
const speed2 = 8500;
const speed3 = 11000;

const Classical = posed.div({
  enter: { opacity: 0.6, transition: { duration: speed1 } },
  exit: { opacity: 0, transition: { duration: speed1 } }
});
const ClassicalChild = posed.div({
  enter: { opacity: 0.5, transition: { duration: speed2 } },
  exit: { opacity: 0, transition: { duration: speed2 } }
});
const ClassicalChildTwo = posed.div({
  enter: { opacity: 0.4, transition: { duration: speed3 } },
  exit: { opacity: 0, transition: { duration: speed3 } }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "classical",
      buttonDisplay: false,
      clickToggle: true,
      isVisible: true,
      isVisible2: true,
      isVisible3: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.displayButton = this.displayButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
  }

  componentDidMount() {
    this.setState({
      isVisible: false,
      isVisible2: false,
      isVisible3: false
    });
    setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, speed1);
    setInterval(() => {
      this.setState({
        isVisible2: !this.state.isVisible
      });
    }, speed2);
    setInterval(() => {
      this.setState({
        isVisible3: !this.state.isVisible
      });
    }, speed3);
  }

  handleChange(e) {
    if (this.state.theme === "classical") {
      this.setState({ theme: "hell" });
    } else if (this.state.theme === "hell") {
      this.setState({ theme: "classical" });
    }
  }
  displayButton(e) {
    this.setState({ buttonDisplay: true });
  }
  hideButton(e) {
    if (this.state.clickToggle) {
      this.setState({
        buttonDisplay: false,
        clickToggle: false
      });
    } else {
      this.setState({
        buttonDisplay: true,
        clickToggle: true
      });
    }
  }

  render() {
    let button;
    if (this.state.buttonDisplay) {
      button = (
        <button
          className="fixed bottom-0 right-0 mr-32 mb-24 p-1 px-3 shadow rounded-full bg-gray-500 font-serif text-xs text-gray-600 text-shadow"
          onClick={this.handleChange}
        >
          switch
        </button>
      );
    } else {
      button = "";
    }
    let paintings;
    if (this.state.theme === "classical") {
      paintings = (
        <div
          className="container w-3/5 mx-auto my-auto relative"
          onClick={this.hideButton}
          onMouseEnter={this.displayButton}
        >
          <PoseGroup>
            {this.state.isVisible ? (
              <Classical
                className="classical w-full absolute"
                key="classical"
              />
            ) : (
              ""
            )}
            {this.state.isVisible2 ? (
              <ClassicalChild
                className="classicalChild w-full absolute"
                key="classicalChild"
              />
            ) : (
              ""
            )}
            {this.state.isVisible3 ? (
              <ClassicalChildTwo
                className="classicalChildTwo w-full absolute"
                key="classicalChildTwo"
              />
            ) : (
              ""
            )}
          </PoseGroup>
        </div>
      );
    } else if (this.state.theme === "hell") {
      //for this one, start with some of the booleans flipped; do it in the ternary!
      paintings = (
        <div
          className="hell w-3/5 mx-auto my-auto relative"
          onClick={this.hideButton}
          onMouseEnter={this.displayButton}
        >
          <div className="hellChild w-full absolute"></div>
          <div className="hellChildTwo w-full absolute"></div>
          <div className="hellChildThree w-full absolute"></div>
        </div>
      );
    }
    return (
      <div className="App flex justify-center h-screen bg-black">
        {paintings}
        {button}
        <audio className="fixed top-0 right-0" autoPlay src={aaa}></audio>
      </div>
    );
  }
}

export default App;
