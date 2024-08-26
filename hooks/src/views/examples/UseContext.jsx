import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    const context = useContext(DataContext)
    //console.log(context)

    function addNumber(delta) {
        context.setState({
            ...context.state,
            // sobrescreve SÓ o number, os demais ficam iguais
            number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                <span className="text">{context.state.number}</span>
                <span className="text">{context.state.text}</span>

                <div 
                    className="btn"
                    onClick={() =>  addNumber(-1)}
                > - 1
                </div>
                <div 
                    className="btn"
                    onClick={() =>  addNumber(1)}
                > + 1
                </div>
            </div>
        </div>
    )
}

export default UseContext
