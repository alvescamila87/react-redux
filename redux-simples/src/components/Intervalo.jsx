import React from "react";
import { connect } from 'react-redux';
import './Intervalo.css';
import Card from "./Card";
import { alterarNumeroMinimo } from '../store/actions/numeros'

function Intervalo(props) {

    const { min, max } = props
    props.alterarMinimo(10000)

    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={min} 
                        readOnly
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max} 
                        readOnly
                    />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    // objeto retornará dados
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

// mapear os actions creators para dentro das propriedades do componente
function mapActionCreatorsToProps(dispatch) {
    // objeto retornará funções
    return {
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            // o dispatch passará a action para todos os reducers
            dispatch(action)
        }
    }

}

export default connect(
    mapStateToProps, 
    mapActionCreatorsToProps
)(Intervalo);