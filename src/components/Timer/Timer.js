import React, { Component } from 'react';
import './timer.css'


const time = new Date();
const year = time.getFullYear()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const displayMonth = months[time.getMonth()];
const date = time.getDate()
const hour = time.getHours()


class Timer extends Component {
    state = {
        time: new Date()
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {
        this.setState({
            time: new Date()
        });
    }


    showTime = () => {
        const displayFull = `${displayMonth} ${date}, ${year} ${this.state.time.toLocaleTimeString()}`;

        if (hour >= 0 && hour < 12) {
            let greet = `Good Morning today is`
            return <div className="time">
                <div className="panel">
                    <h1 className="display-text">{greet}</h1>
                    <h1 className="time-h1">{displayFull}</h1>
                </div>
            </div>
        } else if (hour >= 12 && hour <= 18) {
            let greet = `Good Afternoon today is`
            return <div className="time">
                <div className="panel">
                    <h1 className="display-text">{greet}</h1>
                    <h1 className="time-h1">{displayFull}</h1>
                </div></div>
        } else {
            let greet = `Good Evening today is`
            return <div className="time">
                <div className="panel">
                    <h1 className="display-text">{greet}</h1>
                    <h1 className="time-h1">{displayFull}</h1></div></div>
        }
    }

    render() {
        return (
            <div className="time-cont">
                {this.showTime()}
            </div >
        )
    }
}


export default Timer