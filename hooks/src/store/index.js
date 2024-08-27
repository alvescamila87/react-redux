import { reducer } from './reducers'
//import { add2ToNumber } from './actions/number'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0,
}

export {
    initialState,
    reducer,
    //add2ToNumber
}
