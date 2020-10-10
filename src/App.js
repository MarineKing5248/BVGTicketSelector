import React from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import './index.css';

export default function App() {
    return (
        <div className="mainPage">
            <div className="titleSection">
                <h1>Welcome to Berlin</h1>
                <h2>This App will help you find the suitable BVG tickets that you need.</h2>
            </div>
            <MainContainer />
        </div>
    );
}
