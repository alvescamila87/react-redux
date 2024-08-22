export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    console.log(elseChild)

    //console.log(props)
    if(props.test) {
        //return props.children
        return ifChildren
    } else if(elseChild){
        return elseChild
    } else {
        return false
    }
}


/*
    <If test={aluno.nota >= 7}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>
*/

export const Else = props => props.children