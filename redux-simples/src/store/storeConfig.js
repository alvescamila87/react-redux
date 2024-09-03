import { createStore, combineReducers } from 'redux';
import numerosReducer from './reducers/numeros'

// estado compartilhado da aplicação
const reducers = combineReducers ({
    // reducer 1(numeros)
    numeros: numerosReducer,
    /*numeros: function(state, action) {
        //console.log("Reducer Números...")
        //console.log(state, ' ', action)

        switch(action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            default: 
                return {
                    min: 7,
                    max: 31
                }
        }
        // return {
        //     min: 7,
        //     max: 31
        // }
    },*/
    // reducer 2(nomes)
    /*nomes: function(state, action) {
        console.log("Reducer Nomes...")
        console.log(state, ' ', action)
        return [
            'Madalena',
            'Zebedeu',
            'Ester'
        ]
    }*/

})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig