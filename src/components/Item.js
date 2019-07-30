import React, { Component } from 'react'
import '../css/Item.css';

export class Item extends Component {
    render() {

        let button;

        if(this.props.expanded > 0) {
            button = <button className="BackButton" onClick={this.props.contract}>BACK</button>
        }

        let links = []

        if(this.props.item.link) {
            links.push(<a href={this.props.item.link} className="Svg" id="LinkSvg" target="_blank" rel="noopener noreferrer"> </a>)
        }

        if(this.props.item.twitter) {
            links.push(<a href={this.props.item.twitter} className="Svg" id="TwitterSvg" target="_blank" rel="noopener noreferrer"> </a>)
        }

        if(this.props.item.youtube) {
            links.push(<a href={this.props.item.youtube} className="Svg" id="YoutubeSvg" target="_blank" rel="noopener noreferrer"> </a>)
        }

        if(this.props.item.github) {
            links.push(<a href={this.props.item.github} className="Svg" id="GithubSvg" target="_blank" rel="noopener noreferrer"> </a>)
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

                    <div className="LinkBox">
                        {links}
                    </div>

                    <div className="TagBox">
                        {tags}
                    </div>
                </div>
            </div>
        )
    }
}

export default Item
