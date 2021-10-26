import React from 'react'
import { connect } from 'react-redux'
import {  updateFilterAction } from '../store/actions/todo'


const TodoFilter = ({updateFilter}) => {
    const handleChange=(e)=>{
        updateFilter(e.target.value)
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
                               updateFilter:value=>dispatch(updateFilterAction(value))
                            }))
export default TodoFilterStore(TodoFilter)