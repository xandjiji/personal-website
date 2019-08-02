import React, { Component } from 'react'
import '../css/Cursor.css';
import colors from '../colors'

export class Cursor extends Component {
    render() {

        let buttons = [];

        let amount;
        if(this.props.state.items.length > 4) {
            amount = Math.round(this.props.state.items.length / 2) - 1;
        } else {
            amount = 0;
        }

        for(let i = 0; i < amount; i++){
            if(this.props.state.index === i){
                buttons.push(<button style={{background: colors.darkTheme.font, opacity: this.props.state.buttonsOpacity}} className="Cursor" key={i} onClick={() => this.props.setIndex(i)}></button>);
            } else {
                buttons.push(<button style={{background: "inherit", opacity: this.props.state.buttonsOpacity}} className="Cursor" key={i} onClick={() => this.props.setIndex(i)}></button>);
            }
        }

        return (
            <div className="ButtonsDiv">
                {buttons}
            </div>
        )
    }
}

export default Cursor
