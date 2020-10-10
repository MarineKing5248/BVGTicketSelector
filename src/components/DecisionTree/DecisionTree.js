import React from 'react';
import { Wizard, Step, Controls } from 'react-decision-tree-flow';
import './DecisionTree.css';

const tree = {
    touristNumber: ['oneTourist', 'moreTourists'],
    oneTourist: ['junior', 'daysInBerlin'],
    moreTourists: ['daysInBerlin'],
    junior: ['daysInBerlin'],
    daysInBerlin: ['withBikes'],
    withBikes: ['bikesNumber', 'conclusion'],
    bikesNumber: ['conclusion'],
    conclusion: []
};

export default class DecisionTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touristNumber: 2,
            isStudent: false,
            days: 1,
            bikes: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { touristNumber, isStudent, days, bikes } = this.state;
        return (
            <div className="decisionTreeContainer">
                <Wizard tree={tree} first="touristNumber">
                    <Step name="touristNumber">
                        <div className="stepContent">
                            Are you visiting Berlin alone?
                            <br />
                            <Controls>
                            {({ destinations: { oneTourist, moreTourists }}) => (
                                <div>
                                    <button onClick={() => {
                                        oneTourist();
                                        this.setState({ touristNumber: 1 });
                                        }}>Yes</button>
                                    <button onClick={moreTourists}>No</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="oneTourist">
                        <div className="stepContent">
                            How old are you?
                            <br />
                            <Controls>
                            {({ destinations: { junior, daysInBerlin }, back }) => (
                                <div>
                                    <button onClick={junior}>up to 24 years old</button>
                                    <button onClick={daysInBerlin}>over 24 years old</button>
                                    <button onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="moreTourists">
                        <div className="stepContent">
                            How many people are travelling with you?
                            <br />
                            <Controls>
                            {({ destinations: { daysInBerlin }, back }) => (
                                <div>
                                    <input type="number" min="2" step="1" name="touristNumber"
                                    onChange={this.handleChange} value={touristNumber} />
                                    <button onClick={daysInBerlin}>Next</button>
                                    <button onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="junior">
                    <div className="stepContent">
                        Are you a student?
                        <br />
                        <Controls>
                        {({ destinations: { daysInBerlin }, back }) => (
                            <div>
                                <button onClick={() => {
                                    daysInBerlin();
                                    this.setState({ isStudent: true });
                                }}>Yes, I am a student</button>
                                <button onClick={() => {
                                    daysInBerlin();
                                    this.setState({ isStudent: false });
                                }}>No, I am not a student</button>
                                <button onClick={back}>Back</button>
                            </div>
                        )}
                        </Controls>
                    </div>
                    </Step>
                    <Step name="daysInBerlin">
                        <div className="stepContent">
                            How many day are you planning to stay in Berlin?
                            <br />
                            <Controls>
                            {({ destinations: { withBikes }, back }) => (
                                <div>
                                    <input type="number" min="1" step="1" name="days"
                                    onChange={this.handleChange} value={days} />
                                    <button onClick={withBikes}>Next</button>
                                    <button onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="withBikes">
                        <div className="stepContent">
                            Are you going to bring your bike(s) with you?
                            <br />
                            <Controls>
                            {({ destinations: { conclusion, bikesNumber }, back }) => (
                                <div>
                                    <button onClick={
                                        () => {
                                            bikesNumber();
                                            this.setState({ bikesNumber: 1 });
                                        }}>Yes</button>
                                    <button onClick={() => {
                                            conclusion();
                                            this.setState({ bikesNumber: 0 });
                                        }}>No</button>
                                    <button onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="bikesNumber">
                        <div className="stepContent">
                            How many bikes will you bring together with you?
                            <br />
                            <Controls>
                            {({ destinations: { conclusion }, back }) => (
                                <div>
                                    <input type="number" min="1" step="1" name="bikes"
                                    onChange={this.handleChange} value={bikes} />
                                    <button onClick={conclusion}>Next</button>
                                    <button onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="conclusion">
                        <div className="stepContent"></div>
                    </Step>
                </Wizard>
            </div>
        );
    }
};