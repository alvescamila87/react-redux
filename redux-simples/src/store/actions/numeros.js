//referenciar constante para dar mais segurança
import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes'

// Action creator
export function alterarNumeroMinimo(novoNumero) {
    // uma action creator retorna uma action
    return {
        //referenciar constante para dar mais segurança
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        //referenciar constante para dar mais segurança
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}