import React, { useReducer } from 'react';

const Counter = () => {


    let initialState = 0;

    const reducer=(state,action)=>{

        switch(action){
            case 'increment':
                return state +1;
            case 'decrement':
                return state - 1;
            default:
                return state;
        }

    }


    const [state,dispatch] =useReducer(reducer, initialState);

    return (
        <div>


            <h1>count: {state} </h1>
            <button type='button' onClick={()=>dispatch('increment')} >Increment</button>
            <button type='button' onClick={()=>dispatch('decrement')} >Decrement</button>
            
        </div>
    );
};

export default Counter;