import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../static/Clock.css'
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: "",
            minute: "",
            second: ""
        }
    };
    interval = setInterval(() => {
        const date = new Date();//
        let hourDate = "";
        let minDate = "";
        let secDate = "";
        if(date.getHours().toString().length < 2) {
            hourDate = "0"+date.getHours();
        } else {
            hourDate = date.getHours();
        }
        if(date.getMinutes().toString().length < 2) {
            minDate = "0"+date.getMinutes();
        } else {
            minDate = date.getMinutes();
        }
        if(date.getSeconds().toString().length < 2) {
            secDate = "0"+date.getSeconds();
        } else {
            secDate = date.getSeconds();
        }
        this.setState({
            hour: hourDate,
            minute: minDate,
            second: secDate
        })
    }, 1000);
    render() {
        return (
            <div className='container outer mx-auto text-center pt-4'>
                <h1>DigitalClock</h1>
                <div className='row outer d-flex justify-content-center align-items-center'>
                    <div id='hour' className='col-4 display-1 text-center border border-dark rounded time-box mx-3 d-flex justify-content-center align-items-center'>{this.state.hour}</div>
                    <div id='min' className='col-4 display-1 text-center border border-dark rounded time-box mx-3 d-flex justify-content-center align-items-center'>{this.state.minute}</div>
                    <div id='sec' data-mdb-animation="fade-out-up" className='col-4 display-1 text-center border border-dark rounded time-box mx-3 d-flex justify-content-center align-items-center'>{this.state.second}</div>
                </div>
            </div>
        );
    }

}

export default Clock;