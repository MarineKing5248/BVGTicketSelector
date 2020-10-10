import React from 'react';
import { Step, Controls } from 'react-decision-tree-flow';

export default class NextStep extends React.Component {
    render() {
        const {
            stepName, stepValue, handleButtonClick, oneTourist, text
        } = this.props;

        return (
            <div value={stepValue} name={stepName}>
                <button onClick={
                () => {
                    oneTourist;
                    handleButtonClick;
                }}>{text}</button>
            </div>
        );
    }



}

