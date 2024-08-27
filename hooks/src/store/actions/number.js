export function add2ToNumber(dispatch) {

    /* possibilidade de trabalhar com backend 

    fetch('url')
        .then(resp => resp.jason())
        .then(json => dispatch({type: 'userListReady', payload: json}))

    essa informação deve ir na funcao reducer no switch case, por exemplo
    */
    dispatch({ type: 'add2ToNumber' })
}