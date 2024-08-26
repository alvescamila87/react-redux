import React from "react";

export const data = {
    number: 123,
    text: 'Context API...'
}

/* exportação de dados e do dataContext */
const DataContext = React.createContext(data)

export default DataContext