import React from 'react';
import { Wizard, Step, Controls } from 'react-decision-tree-flow';
// import NextStep from './components/NextStep';

const tree = {
  touristNumber: ['oneTourist', 'daysInBerlin'],
  oneTourist: ['junior', 'daysInBerlin'],
  junior: ['daysInBerlin'],
  daysInBerlin: ['oneDay', 'twoDays', 'threeDays', 'oneWeek', 'oneMonth', 'oneYear'],
  oneDay: ['withBikes', 'conclusion'],
  twoDays: ['withBikes', 'conclusion'],
  threeDays: ['withBikes', 'conclusion'],
  oneWeek: ['withBikes', 'conclusion'],
  oneMonth: ['withBikes', 'conclusion'],
  oneYear: ['withBikes', 'conclusion'],
  withBikes: ['conclusion'],
  conclusion: []
};

export default class DecisionTree extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          touristNumber: 1,
      };
      this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, submitDataError: null });
  }

  render() {
    const { touristNumber } = this.state;
    return (
      <Wizard tree={tree} first="touristNumber">
        <Step name="touristNumber">
          <div>
            How many people in your group?
            <br />
            <Controls>
              {({ destinations: { oneTourist, daysInBerlin }}) => (
                <div>
                  <button onClick={() => {
                      oneTourist();
                      this.setState({ touristNumber: 1 });
                    }}>I am alone</button>
                  <button onClick={() => {
                      oneTourist();
                      this.setState({ touristNumber: 2 });
                    }}>2 people</button>
                  <button onClick={daysInBerlin}>3 or more people</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="oneTourist">
          <div>
            How old are you?
            <br />
            <Controls>
              {({ destinations: { junior, daysInBerlin }, back }) => (
                <div>
                  <button onClick={junior}>0-18 years old</button>
                  <button onClick={daysInBerlin}>18-64 years old</button>
                  <button onClick={daysInBerlin}>over 64 years old</button>
                  <button onClick={back}>Back</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="junior">
          <div>
            Are you a student?
            <br />
            <Controls>
              {({ destinations: { daysInBerlin } }) => (
                <div>
                  <button onClick={daysInBerlin}>Yes, I am a student</button>
                  <button onClick={daysInBerlin}>No, I am not a student</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="daysInBerlin">
          <div>
            How many day are you planning to stay in Berlin?
            <br />
            <Controls>
              {({ destinations: { oneDay, twoDays, threeDays, oneWeek, oneMonth, oneYear } }) => (
                <div>
                  <button onClick={oneDay}>one day</button>
                  <button onClick={twoDays}>two days</button>
                  <button onClick={threeDays}>3 days</button>
                  <button onClick={oneWeek}>up to 7 days</button>
                  <button onClick={oneMonth}>up to 1 month</button>
                  <button onClick={oneYear}>up to 1 year</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="oneDay">
          <div>
            Will you bring a bike with you?
            <br />
            <Controls>
              {({ destinations: { withBikes, conclusion } }) => (
                <div>
                  <button onClick={withBikes}>yes</button>
                  <button onClick={conclusion}>no</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="twoDays">
          <div>
            Will you bring a bike with you?
            <br />
            <Controls>
              {({ destinations: { withBikes, conclusion } }) => (
                <div>
                  <button onClick={withBikes}>yes</button>
                  <button onClick={conclusion}>no</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="threeDays">
          <div>
            Will you bring a bike with you?
            <br />
            <Controls>
              {({ destinations: { withBikes, conclusion } }) => (
                <div>
                  <button onClick={withBikes}>yes</button>
                  <button onClick={conclusion}>no</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="oneWeek">
          <div>
            Will you bring a bike with you?
            <br />
            <Controls>
              {({ destinations: { withBikes, conclusion } }) => (
                <div>
                  <button onClick={withBikes}>yes</button>
                  <button onClick={conclusion}>no</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="oneMonth">
          <div>
            Will you bring a bike with you?
            <br />
            <Controls>
              {({ destinations: { withBikes, conclusion } }) => (
                <div>
                  <button onClick={withBikes}>yes</button>
                  <button onClick={conclusion}>no</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="oneYear">
          <div>
            So you decide to live in Berlin now, you should first find an apartment... will you bring a bike with you?
            <br />
            <Controls>
              {({ destinations: { withBikes, conclusion } }) => (
                <div>
                  <button onClick={withBikes}>yes</button>
                  <button onClick={conclusion}>no</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="withBikes">
          <div>
            How many bikes will you bring with you?
            <br />
            <Controls>
              {({ destinations: { conclusion } }) => (
                <div>
                  <button onClick={conclusion}>TODO: add number input for it</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="conclusion">
          <div></div>
        </Step>
        <Step name="error">
          <div>
            I am error
            <br />
            <Controls>
              {({ back }) => <button onClick={back}>Go back to Step 2</button>}
            </Controls>
          </div>
        </Step>
      </Wizard>
    );
  }
};