import React from 'react'
import { Task } from '../models/Task'


const TodoItem = ({task=new Task(),deleteTask,toggleTask}) => {
    const handleClick=()=>{
        if(window.confirm("Are you sure ?")=== false) return
        deleteTask(task.id)
    }
    const handleChange=()=>{
        toggleTask(task.id)
    }
    return (
        <li className="d-flex justify-content-between p-3 border m-1 align-center">
            <input type="checkbox" onChange={handleChange}/>
            <span className={
                task.iscompleted ? "text-decoration-line-through":"text-capitalize"
            }>{task.title}</span>
            <button className="btn  btn-danger " 
            onClick={handleClick}
           >Delete</button>
        </li>
    )
}


export default TodoItem