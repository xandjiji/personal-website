import React, { Component } from 'react'
import '../css/Vitrine.css';

import img1 from '../assets/img/item1.png';
import img2 from '../assets/img/item2.png';
import img3 from '../assets/img/item3.png';
import img4 from '../assets/img/item4.png';

import Cursor from './Cursor';
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
                img: img1
            },
            {
                id: 6,
                title: 'item 6',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img2
            },
            {
                id: 7,
                title: 'item 7',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img3
            },
            {
                id: 8,
                title: 'item 8',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img4
            },
            {
                id: 9,
                title: 'item 9',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis nihil, quia possimus magnam odio modi sint! Ut obcaecati nobis quibusdam unde aliquam facere, quam eligendi distinctio, nostrum architecto dolorem.',
                img: img1
            }
        ],
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
                <div className="VitrineDiv">
                    <Cursor state={this.state} setIndex={this.setIndex}/>
                    <ContainerItem state={this.state} expanding={this.expand} contract={this.goBack}/>
                </div>
        )
    }
}

export default Vitrine
