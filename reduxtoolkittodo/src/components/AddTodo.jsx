import React, { useState } from 'react'
import  {useDispatch} from 'react-redux' 
import {addTodo} from '../Feautres/Todo/todoSlice'
function AddTodo() {
 const [input,setInput]=useState('');
 const dispatch=useDispatch()
 const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
 }
 return (
<form onSubmit={addTodoHandler} className='space-x-3
mt-12'>
<input 
placeholder='enter a todo'
value={input}
onChange={(e)=>setInput(e.target.value)}
/>
<button 
type='submit'
>
        Addtodo
</button>
</form>
  )
}

export default AddTodo
