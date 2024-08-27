/* objetivo da função reducer, pegar o estado atual, que é o inicialState, 
para cada ação que for acontecendo, vc deve evoluir um atributo 
(adicionar 2 ao número), por exemplo
*/
export function userReducer(state, action) {

    switch(action.type) {
        case 'login':
            return { ...state, user: { name: action.payload } }
        default: 
            return state               
    }
}
