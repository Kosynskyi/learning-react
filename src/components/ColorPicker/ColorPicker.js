import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionInx: 0,
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionInx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  setActiveIdx = index => {
    this.setState({
      activeOptionInx: index,
    });
  };

  render() {
    const { options } = this.props;
    const { activeOptionInx } = this.state;

    const activeOptionLabel = options[activeOptionInx].label;

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {activeOptionLabel}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                onClick={() => this.setActiveIdx(index)}
                type="button"
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

// const ColorPicker = ({ options }) => {
//   return (

//   );
// };

export default ColorPicker;
