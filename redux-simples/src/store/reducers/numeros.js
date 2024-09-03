// referenciar constantes para dar mais segurança
import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from '../actions/actionTypes'

const inicialState = {
    min: 1,
    max: 10
}

export default function(state = inicialState, action) {
    switch(action.type) {
        case NUM_MIN_ALTERADO: // referenciar constantes para dar mais segurança
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO: // referenciar constantes para dar mais segurança
            return {
                ...state,
                max: action.payload
            }
        default: 
            return state
    }
}