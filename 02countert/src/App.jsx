import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
  const addValue=()=>{
    console.log("clicked",counter);
    // batch mai jata hai fibre mai islyite as a function
    // mai pass hota hai
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
  }
  const removeValue=()=>{
    if(counter==0) return;
    setCounter(counter-1);
  }
  return (
  <>
    <h1>chai aur react{counter}</h1>
    <h2>counter value:{counter}</h2>
    <button 
    onClick={addValue}>Add value{counter}</button>
    <br/><hr/>
    <button 
    onClick={removeValue}>remove value{counter}</button>
  </>
  )
}
export default App
