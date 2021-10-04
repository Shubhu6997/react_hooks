import React from "react";

function Counter(){
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("abc");

    const [myname, setMyName] = React.useState({
        firstname : "a",
        lastname : "b"
    })

    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);
    const reset = () => setCount(0);
    const changeName = () => setName("Shubhu");

    const changeFirstName = () => setMyName({...myname, firstname : "shubham"});
    const changeLastName = () => setMyName({...myname, lastname : "haval"})
    
    return (
        <div>
            <h2>Using useState</h2> 
            <p>Count : {count} </p>
            <p>Name : {name}</p>
            <p>FirsName : {myname.firstname}</p>
            <p>LastName : {myname.lastname}</p>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset}>Reset</button>
            <button onClick = {changeName}>Change Name</button>
            <br/><br/>
            <button onClick = {changeFirstName}>Change Firsname</button>
            <button onClick = {changeLastName}>Change Lastname</button>
        </div>
    )
}

export default Counter;