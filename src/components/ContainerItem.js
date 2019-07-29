import React, { Component } from 'react'
import '../css/ContainerItem.css';

import Item from './Item';

export class ContainerItem extends Component {

    render() {

        let width = '50%';
        let height = '50%';

        if(this.props.state.expanded > 0) {
            width = '100%'
            height = '100vh'
        }

        return (
            <div className="ParentContainer">
                {this.props.state.items.map((item) => (
                    <div    key={item.id}
                            ref={item.id}
                            className="Item"

                            style={{
                                'transform': `translateY(-${this.props.state.index*(100)}%)`,
                                'width': width,
                                'height': height}}

                            /* onClick={this.props.expanding.bind(this, item.id, this.props.state.index)} */>

                        <Item item={item} expanded={this.props.state.expanded} contract={this.props.contract}/>

                    </div>
                ))}
            </div>
        )
    }
}

export default ContainerItem
