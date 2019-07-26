import React, { Component } from 'react'
import '../css/ContainerItem.css';

export class ContainerItem extends Component {

    /* 
    atributo a mais no estado ([0] = normal / [1-9] = expandido)
    salvar o estado anterior
    mudar o estado atual
    fazer um if para renderizar apenas o item expandido do estado
    inline style para ele ocupar toda a tela
    botao de voltar para o estado anterior
    */

    render() {

        let width = '50%';
        let height = '50%';

        let button;

        if(this.props.state.expanded > 0) {
            width = '100%'
            height = '100vh'

            button = <button className="BackButton" onClick={this.props.contract}></button>
        }


        return this.props.state.items.map((item) => (
            <div    key={item.id}
                    ref={item.id}
                    className="Item"
                    style={{    'transform': `translateY(-${this.props.state.index*(100)}%)`,
                                'width': width,
                                'height': height}}
                    /* onClick={() => this.expand(item.id)}> */
                    onClick={this.props.expanding.bind(this, item.id, this.props.state.index)}>

                <div className="Box">
                    <h2>{item.title}</h2>
                    <div className="Contents">
                        <img className="ItemImg" src={item.img} alt=""/>
                        {button}
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        ));
    }
}

export default ContainerItem
