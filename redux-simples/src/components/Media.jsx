import React from "react";
import Card from "./Card";
import { connect } from 'react-redux'

// Passo 1: colocar dados da store dentro do componente
/* Forma 1: export defaul props => { */
/* Forma 2: const Media = props => { */
/* Forma 3: function Media (props) { */
function Media (props) {

    //console.log(props.numeros)
    const { min, max } = props
    console.log(props)

    return (
        <Card title="Média dos números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

// Passo 3: passar essa função para o connect()
function mapStateToProps(state) {
    return {
        //numeros: state.numeros
        min: state.numeros.min,
        max: state.numeros.max,
        //nomes: state.nomes[0]
    }
}

// Passo 2: colocar dados da store dentro do componente
export default connect(mapStateToProps)(Media)