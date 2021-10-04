import React from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const countReducer = (count, action) =>{
    console.log(count);
    console.log(action);
    switch(action.type){
        case INCREMENT: { return count + action.by;}
        case DECREMENT: { return count - action.by;}
        case RESET: { return 0;}
        default: {return count;};
    }   
}


const changeName = (name, action) =>{
    return action;
}



function Reducer(){

const [count, dispatch] = React.useReducer(countReducer,0);

const [name, nameDispatch] = React.useReducer(changeName,"abc");

    //Same as componentDidMount
React.useEffect(()=>{
    console.log("Rendered");
    
    //same like componentWillUnmount
    return()=>{
        console.log("component removed");
    }
},[]);

//Same like componentDidUpdate
React.useEffect(()=>{
    console.log("State is changed");
})

//only if count changes
React.useEffect(()=>{
    console.log("Count changed");
},[count])

    return (
        <div>
            <h2>Using useReducer</h2>
            <p>Count : {count} </p>
            <p>Name : {name}</p>
            <button onClick = {()=>dispatch({type: INCREMENT, by: 10})}>Increment</button>
            <button onClick = {()=>dispatch({type: DECREMENT, by: 5})}>Decrement</button>
            <button onClick = {()=>dispatch({type: RESET})}>Reset</button>
            <button onClick = {()=>nameDispatch("shubhu")}>Change Name</button> 

        </div>
    )
}

export default Reducer;