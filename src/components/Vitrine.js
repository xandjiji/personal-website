import React, { Component } from 'react'
import '../css/Vitrine.css';

import img1 from '../assets/img/item1.png';
import img2 from '../assets/img/item2.png';
import img3 from '../assets/img/item3.png';
import img4 from '../assets/img/item4.png';

import ContainerItem from './ContainerItem';

export class Vitrine extends Component {

    state = {
        items: [
            {
                id: 1,
                title: 'item 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img1
            },
            {
                id: 2,
                title: 'item 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img2
            },
            {
                id: 3,
                title: 'item 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img3
            },
            {
                id: 4,
                title: 'item 4',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img4
            },
            {
                id: 5,
                title: 'item 5',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img4
            },
            {
                id: 6,
                title: 'item6',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img4
            },
            {
                id: 7,
                title: 'item 7',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img4
            }
        ],
        index: 0
    }

    incIndex = () => {
        let newIndex = this.state.index;
        newIndex++;

        if(newIndex < ((this.state.items.length / 2) - 1)) {
            this.setState({index: newIndex})
        }
    }

    decIndex = () => {
        let newIndex = this.state.index;
        newIndex--;

        if(newIndex >= 0){
            this.setState({index: newIndex})
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

    /* createButtons = () => {
        let buttons = [];

        let amount = (this.state.items.length / 2);
        amount = Math.floor(amount);

        for(let i = 0; i < 10; i++){
            buttons.push(<button>{i}</button>);
        }

        return buttons;
    } */

    render() {

        let buttons = [];

        let amount = (this.state.items.length / 2);
        amount = Math.floor(amount);

        for(let i = 0; i < amount; i++){
            if(this.state.index === i){
                buttons.push(<button className="CurrentCursor" key={i} onClick={() => this.setIndex(i)}></button>);
            } else {
                buttons.push(<button className="Cursor" key={i} onClick={() => this.setIndex(i)}></button>);
            }
        }
        
        return (                
                <div className="VitrineDiv" ref="vitrine">
                    <div className="ButtonsDiv">
                        {buttons}
                    </div>
                    
                    <ContainerItem state={this.state}/>
                </div>
        )
    }
}

export default Vitrine
