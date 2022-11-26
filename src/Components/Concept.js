
// in Redux most importent part of useRedux : 

import React, { useReducer } from 'react'; 

const initalState = 9; 

const reducer = (state , action) =>{


    switch(action){

        case "increment" : 

        return state + 1 ; 

        case "decrement" :

            return state - 1 ; 


            default: 
             return state 
    }
}; 


function Concept(){

const[count , dispatch ]= useReducer(reducer , initalState) ; 


    return (


        <>
        
        <p>welCome to Reducer Concept </p>

        <h1> Count = {count}</h1>

        <button  onClick={()=> dispatch('increment')}> Increment</button>

        <button onClick={()=> dispatch('decrement')}> Decrement</button>
        
        </>
    )
}
export default  Concept ; 
