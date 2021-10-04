
import React from "react";
import Counter from "./Counter";
import Reducer from "./Reducer";



function App() {

  const [show, setShow] = React.useState(true);

  return (
  <div>
    <button onClick ={()=>setShow(!show)} >SHOW/HIDE</button>
    {
      show ? <div><Counter/><Reducer/></div> : <></>
    }
    
  </div>
  )
}

export default App;
