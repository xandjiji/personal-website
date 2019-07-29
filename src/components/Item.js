import React, { Component } from 'react'
import '../css/Item.css';

export class Item extends Component {
    render() {

        let button;

        if(this.props.expanded > 0) {
            button = <button className="BackButton" onClick={this.props.contract}></button>
        }

        return (
            <div className="Box">
                <h2>{this.props.item.title}</h2>
                <div className="Contents">
                    <img className="ItemImg" src={this.props.item.img} alt=""/>
                        {button}
                        <div className="ItemTxt">
                            <p>{this.props.item.description}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Item
