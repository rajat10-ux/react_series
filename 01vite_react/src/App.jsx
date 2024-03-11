import "./App.css"
import Chai from "./Chai"
function App() {
  const username="chai aur react";
  return (
    // this is called fragments and is very good practice
    <>
    <div className="rajat">
    hello this is rajat{username}
   </div>
   <Chai/>
    </>
  )
}

export default App
