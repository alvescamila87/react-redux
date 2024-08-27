import { numberReducer } from './number'
import { userReducer } from './user'

/* objetivo da função reducer, pegar o estado atual, que é o inicialState, 
para cada ação que for acontecendo, vc deve evoluir um atributo 
(adicionar 2 ao número), por exemplo
*/
export function reducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}
