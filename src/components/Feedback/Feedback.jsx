import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>
            Good:<span>0</span>
          </p>
          <p>
            Neutral:<span>0</span>
          </p>
          <p>
            Bad:<span>0</span>
          </p>
        </div>
      </>
    );
  }
}
