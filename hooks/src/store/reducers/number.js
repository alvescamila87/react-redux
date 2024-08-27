/* objetivo da função reducer, pegar o estado atual, que é o inicialState, 
para cada ação que for acontecendo, vc deve evoluir um atributo 
(adicionar 2 ao número), por exemplo
*/
export function numberReducer(state, action) {
    switch(action.type) {
        case 'add2ToNumber':
            return {...state, number: state.number + 2}
        case 'numberTimes7':
            return { ...state, number: state.number * 7} 
        case 'numberDivideBy25_v1':
            // camila
            return { ...state, number: parseInt(state.number / 25) };
        case 'numberDivideBy25_v2':
            // correção
            return { ...state, number: state.number / 25 };
        case 'numberParseInt':
            // correção
            return { ...state, number: parseInt(state.number) };
        case 'addValueN':
            // correção
            return { ...state, number: state.number + action.payload };
        default: 
            return state               
    }
}