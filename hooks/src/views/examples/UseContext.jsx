import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    //EX 01
    const context = useContext(DataContext)
    //console.log(context)

    function addNumber(delta) {
        context.setState({
            ...context.state,
            // sobrescreve SÓ o number, os demais ficam iguais
            number: context.state.number + delta
        })
    }

    //EX 02
    const {number, text, setNumber, setText} = useContext(AppContext)

    useEffect(function() {
        if(number > 1250) {
            setText("You can't do it")
        } 
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exemplo #01"/>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                
                <div>
                    <button 
                        className="btn"
                        onClick={() =>  addNumber(-1)}
                    > - 1
                    </button>
                    <button 
                        className="btn"
                        onClick={() =>  addNumber(1)}
                    > + 1
                    </button>
                </div>
            </div>
            <SectionTitle title="Exemplo #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => setNumber(number - 1)}
                    >- 1                        
                    </button>
                    <button 
                        className="btn"
                        onClick={() => setNumber(number + 1)}
                    >+ 1                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
