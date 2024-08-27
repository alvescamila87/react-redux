import { useState } from "react";

export const useCounter = (initialValue = 100) => {

    const [count, setCount] = useState(initialValue)

    function incr() {
        setCount(count + 1)
    }

    function decr() {
        setCount(count - 1)
    }

    return [count, incr, decr]

}