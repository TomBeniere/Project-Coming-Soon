import React, { Fragment } from 'react';
import './App.css';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dateworld: new Date(Date.now()) };
        this.setState(this.state)
    }

    componentDidMount() {

        this.miseajour();

    }

    miseajour() {
        setInterval(() => {
            this.state.dateworld = new Date(Date.now());
            this.setState(this.state);
            this.diff = new Date(this.props.date) - this.state.dateworld;
            this.jour = Math.floor(((this.diff / 1000) / 60) / 60 / 24);
            this.heure = Math.floor(((this.diff / 1000) / 60) / 60) - this.jour * 24;
            this.minute = Math.floor(((this.diff / 1000) / 60)) - (this.jour * 24 * 60) - this.heure * 60;
            this.seconde = Math.floor(((this.diff / 1000))) - (this.jour * 24 * 60 * 60) - this.heure * 60 * 60 - this.minute * 60;
        }, 1000);

    }

    render() {
        return (
            <Fragment>
                <div>{this.jour}</div>
                <div>{this.heure}</div>
                <div>{this.minute}</div>
                <div>{this.seconde}</div>
            </Fragment>
        );
    }
}


export default Timer;
