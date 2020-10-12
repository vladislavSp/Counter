import React, { Component } from 'react';
import './App.css';
import { Counter } from './Counter.jsx';

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minValue: 0,
      maxValue: 100,
      initValue: 10,
    };

    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlerFocusValue = this.handlerFocusValue.bind(this);
  }

  handleChangeValue(evt) {
    let name = evt.target.name;

    if (name === `minus`) {
      this.setState(prevState => {
        if (prevState.initValue === this.state.minValue) return;
        else {
          return {
            initValue: prevState.initValue - 1
          };
        }
      });
    }

    if (name === `plus`) {
      this.setState(prevState => {
        if (prevState.initValue === this.state.maxValue) return;
        else {
          return {
            initValue: prevState.initValue + 1
          };
        }
      });
    }
  }

  handleInputChange(evt) {
    let {minValue, maxValue} = this.state;
    let value = parseInt(evt.target.value);

    if (value > maxValue) return;

    if (value) {
      if (value < minValue) {
        this.setState({initValue: minValue});
      } else {
        this.setState({initValue: value});
      }
    }
  }

  handlerFocusValue(evt) {
    let delta = evt.deltaY;

    if (delta > 0) {
      this.setState(prevState => {
        if (prevState.initValue === this.state.minValue) return;
        else {
          return {
            initValue: prevState.initValue - 1
          };
        }
      });
    } else if (delta < 0) {
      this.setState(prevState => {
        if (prevState.initValue === this.state.maxValue) return;
        else {
          return {
            initValue: prevState.initValue + 1
          };
        }
      });
    }
  }

  render() {
    const {minValue, maxValue, initValue} = this.state;

    return (
      <div className="App">
        <Counter initValue={initValue} onChangeValue={this.handleChangeValue} minValue={minValue} maxValue={maxValue} onInputChange={this.handleInputChange} onFocusChange={this.handlerFocusValue} />
      </div>
    );
  }
}
