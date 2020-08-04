import React, { Component } from "react";

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: true,
      pause: false,
      lap: false,
      reset: false,
    };
  }

  startController() {
    this.setState({
      ...this.state,
      start: false,
      pause: true,
      lap: true,
      reset: false,
    });

    this.props.start();
  }

  pauseController() {
    this.setState({
      ...this.state,
      start: true,
      pause: false,
      lap: false,
      reset: true,
    });

    this.props.pause();
  }
  lapController() {
    this.props.lap();
  }

  resetController() {
    this.setState({
      ...this.state,
      start: true,
      pause: false,
      lap: false,
      reset: false,
    });

    this.props.reset();
  }

  getController() {
    let output = null;
    if (this.state.start && !this.state.reset) {
      output = (
        <div className="my-5 mx-4">
          <button
            className="btn btn-outline-primary px-5 mx-4"
            onClick={() => this.startController()}
          >
            Start
          </button>
        </div>
      );
    } else if (this.state.pause && this.state.lap) {
      output = (
        <div className="my-5">
          <button
            className="btn btn-outline-secondary px-5 ml-5"
            onClick={() => this.pauseController()}
          >
            Pause
          </button>
          <button
            className="btn btn-outline-warning px-5 ml-5"
            onClick={() => this.lapController()}
          >
            Lap
          </button>
        </div>
      );
    } else if (this.state.start && this.state.reset) {
      output = (
        <div className="my-5">
          <button
            className="btn btn-outline-primary px-5 ml-5"
            onClick={() => this.startController()}
          >
            Start
          </button>
          <button
            className="btn btn-outline-danger px-5 ml-5"
            onClick={() => this.resetController()}
          >
            Reset
          </button>
        </div>
      );
    }

    return output;
  }

  render() {
    return this.getController();
  }
}

export default Controller;
