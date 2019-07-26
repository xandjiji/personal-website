import React, { Component } from 'react'
import '../css/ContainerItem.css';

export class ContainerItem extends Component {

    render() {

        let width = '50%';
        let height = '50%';

        let button;

        if(this.props.state.expanded > 0) {
            width = '100%'
            height = '100vh'

            button = <button className="BackButton" onClick={this.props.contract}></button>
        }

        let dimensionList = [];
        for(let i = 1; i < this.props.state.items.length + 1; i++) {

            let dimension = {
                width: '50%',
                height: '50%'
            }

            let biggerDimension = {
                width: '100%',
                height: '100vh'
            }
            
            if(this.props.state.expanded === i) {
                dimensionList.push(biggerDimension);
            } else {
                dimensionList.push(dimension);
            }
        }

        return this.props.state.items.map((item) => (
            <div    key={item.id}
                    ref={item.id}
                    className="Item"
                    style={{    'transform': `translateY(-${this.props.state.index*(100)}%)`,
                                'width': width,
                                'height': height}}
                    onClick={this.props.expanding.bind(this, item.id, this.props.state.index)}>

                <div className="Box">
                    <h2>{item.title}</h2>
                    <div className="Contents">
                        <img className="ItemImg" src={item.img} alt=""/>
                        {button}
                        <div className="ItemTxt">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }
}

export default ContainerItem
