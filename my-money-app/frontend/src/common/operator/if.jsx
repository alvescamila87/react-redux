import React from "react"

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false // não retorne null, senão dará problema
    }
}