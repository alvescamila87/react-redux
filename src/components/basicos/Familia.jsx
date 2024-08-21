import React, { cloneElement } from "react"

export default (props) => {
    return (
        <div>
            {
                // Opção para 1 Elemento: React.cloneElement(props.children,{ ...props })
                
                // Opção para + Elementos:
                // React.Children.map(props.children, (child) => {
                //        return cloneElement(child, props)
                // })

                // Opção 3:
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i});
                })
            }
        </div>
    )
}