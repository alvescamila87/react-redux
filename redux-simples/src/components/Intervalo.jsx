import React from "react";
import { connect } from 'react-redux';
import './Intervalo.css';
import Card from "./Card";
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

function Intervalo(props) {

    const { min, max } = props
    //props.alterarMinimo(10000)

    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={min} 
                        //readOnly
                        onChange={e => props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max} 
                        //readOnly
                        onChange={e => props.alterarMaximo(+e.target.value)}
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
// nome: function mapActionCreatorsToProps(dispatch) {
function mapDispatchToProps(dispatch) {
    // objeto retornará funções
    return {
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            // o dispatch passará a action para todos os reducers
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }

}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Intervalo);