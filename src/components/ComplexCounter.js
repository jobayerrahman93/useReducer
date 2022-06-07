import React, { useReducer } from 'react';

const ComplexCounter = () => {
    
    let initialState = {
        counter:0,
        counter2:5
    };

    const reducer=(state,action)=>{

        // ekhane action holo object and type action er properties
        switch(action.type){
            case 'increment':
                return {...state,counter: state.counter + action.value};
            case 'decrement':
                return {...state,counter:state.counter - action.value};
            case 'increment2':
                return {...state,counter2: state.counter2 + action.value};
            case 'decrement2':
                return {...state,counter2:state.counter2 - action.value};
            default:
                return state;
        }

    }


    const [count,dispatch] =useReducer(reducer, initialState);
    console.log(count);

    return (
        <div>

            <h1>Complex Counter</h1>
            <h1>count: {count.counter} </h1>
            <button type='button' onClick={()=>dispatch(
                {
                    type:'increment',
                    value:1
            }
                )
                } >Increment by 1</button>
            <button type='button' onClick={()=>dispatch(
                {
                    type:'decrement',
                    value:1
                }
                )} >Decrement by 1</button>
            {/* <button type='button' onClick={()=>dispatch(
                {
                    type:'increment',
                    value:5
            }
                )
                } >Increment by 5</button>
            <button type='button' onClick={()=>dispatch(
                {
                    type:'decrement',
                    value:5
                }
                )} >Decrement by 5</button> */}
            

            <div>
            <h1>count2: {count.counter2} </h1>
            <button type='button' onClick={()=>dispatch(
                {
                    type:'increment2',
                    value:5
            }
                )
                } >Increment by 5</button>
            <button type='button' onClick={()=>dispatch(
                {
                    type:'decrement2',
                    value:5
                }
                )} >Decrement by 5</button>
            </div>
        </div>
    );
};

export default ComplexCounter;