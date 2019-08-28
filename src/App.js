import React from "react";
import "./App.css";
import posed, { PoseGroup } from "react-pose";
import aaa from "./css/aaa.mp3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "classical",
      buttonDisplay: false,
      clickToggle: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.displayButton = this.displayButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
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
          className="classical w-3/5 mx-auto my-auto relative"
          onClick={this.hideButton}
          onMouseEnter={this.displayButton}
        >
          <div className="classicalChild w-full absolute"></div>
          <div className="classicalChildTwo w-full absolute"></div>
        </div>
      );
    } else if (this.state.theme === "hell") {
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
        <audio
          className="fixed top-0 right-0"
          autoPlay
          controls
          src={aaa}
        ></audio>
      </div>
    );
  }
}

export default App;
