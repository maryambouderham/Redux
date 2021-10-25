import React from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_FILTER } from '../store/types/todo'

const TodoFilter = ({filterTaskByTitle}) => {
    const handleChange=(e)=>{
        filterTaskByTitle(e.target.value)
    }
    return (
        <div className="w-50 mx-auto text-center ">
            <input type="search" placeholder="filter by title"
            onChange={handleChange}
             />

        </div>
    )
}
const TodoFilterStore =connect(null,
    (dispatch)=>({
        filterTaskByTitle:query=>dispatch({
            type:TYPE_TODO_FILTER,
            payload:{query}
        }) 
    }))
export default TodoFilterStore(TodoFilter)