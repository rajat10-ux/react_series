import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
function MyApp(){
  return <div>
    <h1>custom app</h1>
  </div>
}
const anotherElement=(
  <a href='https://google.com' target='_blank'>visit google</a>
)
// custom render hai yeh not applicable for object usering 
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'clcik me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
