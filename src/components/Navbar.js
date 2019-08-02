import React, { Component } from 'react'
import '../css/Navbar.css';
import colors from '../colors'
import logo from '../assets/img/logo.png';

export class Navbar extends Component {
    render() {
        return (
            <div className="Sidebar" style={{'background-color' : colors.darkTheme.navbar}}>
                <img id="logoID" src={logo} alt=""/>
                <h2 style={{'color' : colors.darkTheme.font}}>
                    xandjiji
                </h2>
                <p style={{'color' : colors.darkTheme.font}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.
                </p>
            </div>
        )
    }
}

export default Navbar
