
import './App.css'
import Card from './components/Card'

function App() {
 let myObj={
  username:"hitesh",
  age:20
 }
  return (
   <>
    <h1 className='bg-green-500 text-black p-4 rounded'>
    Tailwind test</h1>
    <Card username="chai aur code" btnText={"click me"}/>
    <Card username="rajat" />
   </>
  )
}

export default App
