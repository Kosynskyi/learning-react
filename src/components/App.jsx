import React, { Component } from 'react';

import { Feedback } from './Feedback';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  totalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  positivePercentage = () =>
    Math.floor((this.state.good / this.totalFeedback()) * 100);

  render() {
    return (
      <>
        <Feedback data={this.state} addFeedback={this.addFeedback} />
        <Statistics
          data={this.state}
          total={this.totalFeedback()}
          positivePercentage={this.positivePercentage()}
        />
      </>
    );
  }
}
