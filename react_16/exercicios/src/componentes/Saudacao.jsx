import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        // tipo: 'Fala',
        // nome: "Pedro",
        tipo: this.props.tipo,
        nome: this.props.nome,
    }
    
    constructor(props) {
        super(props)
        // this.state = {
        //     // tipo: 'Fala',
        //     // nome: "Pedro",
        //     tipo: this.props.tipo,
        //     nome: this.props.nome,
        // }
        this.setTipo = this.setTipo.bind(this)
        //this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        //console.log(e.target.value)
       //this.props.tipo = e.target.value

    //    let i = 1
    //    setInterval(() => {
    //         this.setState({ tipo: ++i})
    //    }, 1000)

       this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        //const { tipo, nome } = this.props;       
        const { tipo, nome } = this.state;       

        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}