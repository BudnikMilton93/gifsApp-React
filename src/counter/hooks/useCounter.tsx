import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const handdleAdd = () => {
        setCounter(counter + 1);
    }

    const handdleSubstract = () => {
        setCounter((prevState) => prevState - 1 );
    }

    const handdleReset = () => {
        setCounter(initialValue);
    }

    return {
        //Values
        counter, 
        
        //Methods
        handdleAdd, handdleSubstract, handdleReset

    }
}
