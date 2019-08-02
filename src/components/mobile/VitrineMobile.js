import React, { Component } from 'react'
import '../../css/mobile/VitrineMobile.css';
import colors from '../../colors'

import data from '../../data'

import CursorMobile from '../mobile/CursorMobile';
import ContainerItemMobile from '../mobile/ContainerItemMobile';

export class VitrineMobile extends Component {

    state = {
        items: data.items,
        index: 0,
        expanded: 0,
        buttonsOpacity: 1
    }

    itemList = this.state.items;

    previousIndex;

    incIndex = () => {
        let newIndex = this.state.index;
        newIndex++;

        let maxIndex = this.state.items.length;

        if(newIndex < maxIndex) {
            this.setIndex(newIndex)
        } else {
            this.setIndex(0);
        }
    }

    decIndex = () => {
        let newIndex = this.state.index;
        newIndex--;

        let maxIndex = this.state.items.length - 1;

        if(newIndex >= 0){
            this.setIndex(newIndex)
        } else {
            this.setIndex(maxIndex);
        }
    }

    setIndex = (cursorPosition) => {
        this.setState({index: cursorPosition})
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    handleScroll = (event) => {        
        if(event.deltaY > 0) {
            this.incIndex();
        } else {
            this.decIndex();
        }
    }


    expand = (id, index) => {
        if(this.state.expanded === 0) {
            this.previousIndex = index;
            this.setIndex(id - 1);
            this.setState({expanded: id});
            this.setState({buttonsOpacity: 0});
        }
    }

    goBack = () => {
        this.setState({expanded: 0});
        this.setState({index: this.previousIndex});
        this.setState({buttonsOpacity: 1});
    }

    render() {
        
        return (
                <div className="VitrineMobileDiv" style={{'background-color' : colors.darkTheme.background}}>
                    <CursorMobile state={this.state} setIndex={this.setIndex}/>
                    <ContainerItemMobile state={this.state} expanding={this.expand} contract={this.goBack}/>
                </div>
        )
    }
}

export default VitrineMobile
