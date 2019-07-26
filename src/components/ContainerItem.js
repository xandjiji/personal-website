import React, { Component } from 'react'
import '../css/ContainerItem.css';

export class ContainerItem extends Component {

    expand = (id) => {
        alert("my id is: " + id);
    }

    /* 
    atributo a mais no estado ([0] = normal / [1-9] = expandido)
    salvar o estado anterior
    mudar o estado atual
    fazer um if para renderizar apenas o item expandido do estado
    inline style para ele ocupar toda a tela
    botao de voltar para o estado anterior
    */

    render() {
        return this.props.state.items.map((item) => (
            <div    key={item.id}
                    ref={item.id}
                    className="Item"
                    style={{'transform': `translateY(-${this.props.state.index*(100)}%)`}}
                    onClick={() => this.expand(item.id)}>

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
