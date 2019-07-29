import React, { Component } from 'react'
import '../css/Item.css';

import link from '../assets/svg/link.svg'
import github from '../assets/svg/github.svg'
import twitter from '../assets/svg/twitter.svg'
import youtube from '../assets/svg/youtube.svg'

export class Item extends Component {
    render() {

        let button;

        if(this.props.expanded > 0) {
            button = <button className="BackButton" onClick={this.props.contract}></button>
        }

        let links = []

        if(this.props.item.link) {
            links.push(
                <div className="LinkBox">
                    <img src={link} className="Svg" alt=""/>
                    <a href={this.props.item.link} target="_blank" rel="noopener noreferrer">Check it out</a>
                </div>
                )
        }

        if(this.props.item.github) {
            links.push(
                <div className="LinkBox">
                    <img src={github} className="Svg" alt=""/>
                    <a href={this.props.item.github} target="_blank" rel="noopener noreferrer">Check it out</a>
                </div>
                )
        }

        if(this.props.item.twitter) {
            links.push(
                <div className="LinkBox">
                    <img src={twitter} className="Svg" alt=""/>
                    <a href={this.props.item.twitter} target="_blank" rel="noopener noreferrer">Check it out</a>
                </div>
                )
        }

        if(this.props.item.youtube) {
            links.push(
                <div className="LinkBox">
                    <img src={youtube} className="Svg" alt=""/>
                    <a href={this.props.item.youtube} target="_blank" rel="noopener noreferrer">Check it out</a>
                </div>
                )
        }

        let tags = [];

        if(this.props.item.tags) {
            for(let i = 0; i < this.props.item.tags.length; i++) {
                tags.push(
                    <div className="Tag">{this.props.item.tags[i]}</div>
                )
            }
        }

        return (
            <div className="Box">
                <img className="ItemImg" src={this.props.item.img} alt=""/>

                    {button}

                <div className="ItemTxt">
                    <h2>{this.props.item.title}</h2>
                    <br/>
                    <p>{this.props.item.description}</p>
                    <br/>
                    {links}
                    {tags}
                </div>
            </div>
        )
    }
}

export default Item
