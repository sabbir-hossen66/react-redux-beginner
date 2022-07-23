import './Counter.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './services/actions/counterAction';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    return (
        <div>
            <h2>Counter app</h2>

            <h3>Count: {count}</h3>
            <div className='button-style'>
                <button className='first-button' onClick={handleIncrement}>Increment</button>
                <button className='second-button' onClick={handleDecrement}>Decrement</button>
                <button className='third-button' onClick={handleReset}>Reset</button>
            </div>

        </div>
    );
};

export default Counter;

//state-count:0