import React, { Component } from 'react';
import s from './Counter.module.css';

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div className={s.counter}>
        <h2 className={s.title}>Counter</h2>
        <span className={s.value}>{this.state.value}</span>
        <div className={s.controls}>
          <button className={s.button} onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button className={s.button} onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
