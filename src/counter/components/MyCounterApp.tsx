import React from 'react';
import { useCounter } from '../hooks/useCounter';



export const MyCounterApp = () => {

    const {counter, handdleAdd, handdleReset, handdleSubstract } = useCounter(5);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>
                Counter = {counter}
            </h1>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick = {handdleAdd} > +1 </button>
                <button onClick = {handdleSubstract} > -1 </button>
                <button onClick = {handdleReset} > Reset </button>
            </div>
        </div>
    )
}
