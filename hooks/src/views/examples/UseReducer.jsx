import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

/* objetivo da função reducer, pegar o estado atual, que é o inicialState, 
para cada ação que for acontecendo, vc deve evoluir um atributo 
(adicionar 2 ao número), por exemplo
*/
function reducer(state, action) {
    switch(action.type) {
        case 'add2ToNumber':
            return {...state, number: state.number + 2}
        case 'login':
            return { ...state, user: { name: action.payload } }
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

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exemplo #01" />
            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                    )    :  (<span className="text">Sem usuário</span> 
                )}
                <span className="text">{state.number}</span>            
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Madalena' })}
                    >Login                        
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'add2ToNumber' })}
                    >+2                        
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberTimes7' })}
                    >*7                        
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberDivideBy25_v1' })}
                    >/25 version 1                       
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberDivideBy25_v2' })}
                    >/25 version 2                        
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberParseInt' })}
                    >Change to INT                      
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'addValueN', payload: -9 })}
                    >-9 add value                       
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'addValueN', payload: 13 })}
                    >13 add value                   
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
