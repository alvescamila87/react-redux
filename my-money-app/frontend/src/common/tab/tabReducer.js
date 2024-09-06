import { act } from "react"
import { selectTab } from "./tabActions"

// estado para gerenciar componente de abas
const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload }
        default: 
            return state
    }
}