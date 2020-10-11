import React from 'react';
import { Wizard, Step, Controls } from 'react-decision-tree-flow';
import Conclusion from "../Conclusion/Conclusion";
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
                            <h4>Are you visiting Berlin alone?</h4>
                            <Controls>
                            {({ destinations: { oneTourist, moreTourists }}) => (
                                <div className="buttonContainer">
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
                            <h4>How old are you?</h4>
                            <Controls>
                            {({ destinations: { junior, daysInBerlin }, back }) => (
                                <div className="buttonContainer">
                                    <button onClick={junior}>up to 24 years old</button>
                                    <button onClick={daysInBerlin}>over 24 years old</button>
                                    <button className="backButton" onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="moreTourists">
                        <div className="stepContent">
                            <h4>How many people are travelling with you?</h4>
                            <Controls>
                            {({ destinations: { daysInBerlin }, back }) => (
                                <div className="buttonContainer">
                                    <input type="number" min="2" step="1" name="touristNumber"
                                    onChange={this.handleChange} value={touristNumber} />
                                    <button onClick={daysInBerlin}>Next</button>
                                    <button className="backButton" onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="junior">
                    <div className="stepContent">
                        <h4>Are you a student?</h4>
                        <Controls>
                        {({ destinations: { daysInBerlin }, back }) => (
                            <div className="buttonContainer">
                                <button onClick={() => {
                                    daysInBerlin();
                                    this.setState({ isStudent: true });
                                }}>Yes, I am a student</button>
                                <button onClick={() => {
                                    daysInBerlin();
                                    this.setState({ isStudent: false });
                                }}>No, I am not a student</button>
                                <button className="backButton" onClick={back}>Back</button>
                            </div>
                        )}
                        </Controls>
                    </div>
                    </Step>
                    <Step name="daysInBerlin">
                        <div className="stepContent">
                            <h4>How many day are you planning to stay in Berlin?</h4>
                            <Controls>
                            {({ destinations: { withBikes }, back }) => (
                                <div className="buttonContainer">
                                    <input type="number" min="1" step="1" name="days"
                                    onChange={this.handleChange} value={days} />
                                    <button onClick={withBikes}>Next</button>
                                    <button className="backButton" onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="withBikes">
                        <div className="stepContent">
                            <h4>Are you going to bring your bike(s) with you?</h4>
                            <Controls>
                            {({ destinations: { conclusion, bikesNumber }, back }) => (
                                <div className="buttonContainer">
                                    <button onClick={
                                        () => {
                                            bikesNumber();
                                            this.setState({ bikesNumber: 1 });
                                        }}>Yes</button>
                                    <button onClick={() => {
                                            conclusion();
                                            this.setState({ bikesNumber: 0 });
                                        }}>No</button>
                                    <button className="backButton" onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="bikesNumber">
                        <div className="stepContent">
                            <h4>How many bikes will you bring together with you?</h4>
                            <Controls>
                            {({ destinations: { conclusion }, back }) => (
                                <div className="buttonContainer">
                                    <input type="number" min="1" step="1" name="bikes"
                                    onChange={this.handleChange} value={bikes} />
                                    <button onClick={conclusion}>Next</button>
                                    <button className="backButton" onClick={back}>Back</button>
                                </div>
                            )}
                            </Controls>
                        </div>
                    </Step>
                    <Step name="conclusion">
                        <Conclusion touristNumber={touristNumber} isStudent={isStudent} days={days} bikes={bikes} />
                    </Step>
                </Wizard>
            </div>
        );
    }
};