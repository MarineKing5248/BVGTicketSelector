import React from 'react';
import NameSection from '../NameSection/NameSection';
import DecisionTree from '../DecisionTree/DecisionTree';
import './MainContainer.css';

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDecisionTree: false,
            userName: 'Dear friend'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        this.setState({ showDecisionTree: true, userName: name });
    }

    render() {
        const { showDecisionTree, userName } = this.state;
        return (
            <div className='mainContainer'>
                <h2>Hi, {userName} !</h2>
                {!showDecisionTree && <NameSection handleClick={this.handleClick} />}
                {showDecisionTree && <DecisionTree userName={userName} />}
            </div>            
        );
    }
};