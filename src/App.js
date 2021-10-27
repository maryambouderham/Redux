import axios from "axios";
import { useEffect, useState } from "react";


const App=()=> {
   const[todos,setTodos]=useState([])
   const[task,setTask]=useState()
   const[updatedtask,setUpdatedtask]=useState({})
   useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/todos/")
   .then(res=>setTodos(res.data))
 }, []);
 const handleSubmit =(e)=>{
   e.preventDefault()
   axios.post("https://jsonplaceholder.typicode.com/todos",
   {
     userId:1,
     id:null,
     title:task,
     completed:true

   })
   .then(res=>alert("task"+res.data.id+":added succeffuly"))

 }
 const handleSubmitEdit =(e)=>{
  e.preventDefault()
  axios.put("https://jsonplaceholder.typicode.com/todos/"+updatedtask.id,
   updatedtask

  )
  .then(res=>alert("task"+res.data.title+":updated succeffuly"))

}
 const DeleteTask =(idTask)=>{
axios.delete(("https://jsonplaceholder.typicode.com/todos/")+idTask)
.then(res=>alert("task"+idTask+":deleted"))
 }
 
  return (
    <div>
      <form
      onSubmit={handleSubmit}
      className="p-2 text-center">
        
        <input type="text" placeholder="title" onChange={(e)=>setTask(e.currentValue)}/>
        <button type="submit">add task user 1</button>
      </form>
      <form
      onSubmit={handleSubmitEdit}
      className="p-2 text-center">
        
        <input type="text" placeholder="Edit task" onChange={(e)=>setUpdatedtask({...updatedtask,title:e.target.value})}
        value={updatedtask.title}/>
        <button type="submit">edit Task</button>
      </form>
      <hr />
      <ul>
      {todos.map(t=>
      <li key={t.id}>{t.title}
      <button onClick={()=>DeleteTask(t.id)}>Delete</button>
      <button onClick={()=>setUpdatedtask(t)}>Update</button></li>)}
      </ul>
    </div>
  );
}

export default App;
