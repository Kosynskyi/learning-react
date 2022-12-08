import React, { useState } from 'react';

import { Feedback } from './Feedback';
import { Statistics } from './Statistics';

// const useLocalStorage = (key, initialValue) => {
//   const [state, setState] = useState(
//     () => JSON.parse(window.localStorage.getItem(key)) ?? initialValue
//   );

//   useEffect(() => {
//     window.localStorage.setItem('feedback', JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const data = { good, neutral, bad };

  const totalFeedback = () => good + neutral + bad;
  const positivePercentage = () => Math.round((good / totalFeedback()) * 100);

  const addFeedback = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        break;
    }
  };

  return (
    <>
      <Feedback data={data} addFeedback={addFeedback} />
      <Statistics
        data={data}
        total={totalFeedback()}
        positivePercentage={positivePercentage()}
      />
    </>
  );
};
