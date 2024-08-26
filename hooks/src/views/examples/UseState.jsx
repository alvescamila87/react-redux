import React, { useState }from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    /*
    const array = useState(0)
    const num = array[0]
    const setNum = array[1]
    */

    // destructoring
    const [count, setCount] = useState(0)

    const [name, setName] = useState("Initial...")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => setCount(count + 1)}
                    >+ 1                        
                    </button>
                    <button 
                        className="btn"
                        onClick={() => setCount(count - 1)}
                    >- 1                        
                    </button>
                    {/* usando diretamente o valor a ser alterado */}            
                    {/* <button 
                        className="btn"
                        onClick={() => setCount(1000)}
                    >1000                        
                    </button> */}
                    {/* usando função callback */}
                    <button 
                        className="btn"
                        onClick={() => setCount(current => current + 1000)}
                    >1000                        
                    </button>
                </div>

            </div>

            <SectionTitle title="Exercício #02"/>
            <input 
                type="text" 
                className="input"
                value={name} onChange={event => setName(event.target.value)}                   
            />
            <span className='text'>{name}</span>
        </div>
    )
}

export default UseState
