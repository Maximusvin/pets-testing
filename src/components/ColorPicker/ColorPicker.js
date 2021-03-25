import React, { Component } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeIdx: index });
  };

  makeClassesName = index => {
    return this.state.activeIdx === index ? s.activeOptions : s.option;
  };

  render() {
    const { activeIdx } = this.state;
    const { options } = this.props;

    return (
      <div className={s.colorPicker}>
        <h2 className={s.title}>ColorPicker</h2>
        <p className={s.span}>Выбран цвет: {options[activeIdx].label}</p>
        <div>
          {options.map(({ color }, index) => (
            <button
              type="button"
              className={this.makeClassesName(index)}
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
