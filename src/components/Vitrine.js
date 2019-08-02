import React, { Component } from 'react'
import '../css/Vitrine.css';
import colors from '../colors'

import data from '../data'

import Cursor from './Cursor';
import ContainerItem from './ContainerItem';

export class Vitrine extends Component {

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

        let maxIndex;
        if(this.state.items.length < 5) {
            maxIndex = 0;
        } else {
            maxIndex = Math.round(this.state.items.length / 2) - 1;
        }

        if(newIndex < maxIndex) {
            this.setIndex(newIndex)
        } else {
            this.setIndex(0);
        }
    }

    decIndex = () => {
        let newIndex = this.state.index;
        newIndex--;


        let maxIndex;
        if(this.state.items.length < 5) {
            maxIndex = 0;
        } else {
            maxIndex = Math.round(this.state.items.length / 2) - 2;
        }

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
                <div className="VitrineDiv" style={{'background-color' : colors.darkTheme.background}}>
                    <Cursor state={this.state} setIndex={this.setIndex}/>
                    <ContainerItem state={this.state} expanding={this.expand} contract={this.goBack}/>
                </div>
        )
    }
}

export default Vitrine
