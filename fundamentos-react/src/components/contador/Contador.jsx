import React, { Component } from "react";
import './Contador.css'
import Display from "../formulario/Display";
import Botoes from "../formulario/Botoes";
import PassoForm from "../formulario/PassoForm";

class Contador extends Component {

    // altera estado componente alterado através da propriedade
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // incrementar valor do contador
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        }) 
    }

    // descrementar valor do contador
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        }) 
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setIncrementar={this.inc} setDecrementar={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador