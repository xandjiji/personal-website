import React, { Component } from 'react'
import '../../css/mobile/CursorMobile.css';
import colors from '../../colors'

export class CursorMobile extends Component {
    render() {

        let buttons = [];

        let amount;
        if(this.props.state.items.length > 1) {
            amount = Math.round(this.props.state.items.length);
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
            <div className=".ButtonsMobileDiv">
                {buttons}
            </div>
        )
    }
}

export default CursorMobile
