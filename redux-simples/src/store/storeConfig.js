import { createStore, combineReducers } from 'redux';

// estado compartilhado da aplicação
const reducers = combineReducers ({
    numeros: function(state, action) {
        //console.log(state, ' ', action)
        return {
            min: 7,
            max: 31
        }
    },
    nomes: function(state, action) {
        //console.log(state, ' ', action)
        return [
            'Madalena',
            'Zebedeu',
            'Ester'
        ]
    }

})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig