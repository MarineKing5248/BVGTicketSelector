import React from 'react';

export default class NameSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        const { handleClick } = this.props;
        const { name } = this.state;
        return (
            <div >
                <p>Please input your name:</p>
                <input type="text" value={name} placeholder="Enter you name here..." onChange={this.handleChange} />
                <button onClick={ () => handleClick(name) }>Next</button> 
            </div>
        );
    }
  }
