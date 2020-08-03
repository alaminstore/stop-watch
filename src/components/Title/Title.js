import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "This is dummy title",
      isInput: false,
    };
  }

  editHandeler() {
    this.setState({
      ...this.state,
      isInput: true,
    });
  }

  inputChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value,
    });
  }

  keyPressHangler(event) {
    if (event.key == "Enter") {
      this.setState({
        ...this.state,
        isInput: false,
      });
    }
  }

  blurHandler(event) {
    this.setState({
      ...this.state,
      isInput: false,
    });
  }

  render() {
    let output = null;
    if (this.state.isInput) {
      output = (
        <div className="title">
          <input
            className="form-control inputcs"
            onChange={(event) => this.inputChange(event)}
            onKeyPress={(event) => this.keyPressHangler(event)}
            onBlur={(event) => this.blurHandler(event)}
            type="text"
            value={this.state.title}
          />
        </div>
      );
    } else {
      output = (
        <div className="d-flex title">
          <h1 className="display-4">{this.state.title}</h1>
          <span
            onClick={() => this.editHandeler()}
            className="ml-auto edit-icon"
          >
            <i className="fas fa-pencil-alt"></i>
          </span>
        </div>
      );
    }
    return <div>{output}</div>;
  }
}

export default Title;
