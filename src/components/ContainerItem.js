import React, { Component } from 'react'
import '../css/ContainerItem.css';

export class ContainerItem extends Component {

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    /* handleScroll(event) {
        if(event.deltaY > 0) {
            let newIndex = this.state.index;
            newIndex++;

            if(newIndex < ((this.state.items.length / 2) - 1)) {
                this.setState({index: newIndex})
            }
        } else {
            let newIndex = this.state.index;
            newIndex--;

            if(newIndex >= 0){
                this.setState({index: newIndex})
            }
        }
    } */

    /* handleScroll(event) {
        if(event.deltaY > 0) {
            this.setState({index: 1})
        } else {
            
        }
    } */

    render() {
        return this.props.state.items.map((item) => (
            <div key={item.id} className="Item" style={{
                'transform': `translateY(-${this.props.state.index*(100)}%)`
            }}>
                <div className="Box">
                    <h2>{item.title}</h2>
                    <div className="Contents">
                        <img className="ItemImg" src={item.img} alt=""/>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        ));
    }
}

export default ContainerItem
