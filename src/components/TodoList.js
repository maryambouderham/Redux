import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { TYPE_TODO_DEL, TYPE_TODO_TOGGLE } from '../store/types/todo'
const TodoList = ({todos=[],onDelTask,onToggleTask}) => {
    return (
       <ul>
           {todos.todos.map(t=><TodoItem 
           deleteTask={onDelTask}
           toggleTask={onToggleTask}
           key={t.id}
           task={t} />)}
       </ul>
    )
}
const TodoListStore =connect((state)=>({
    todos:state
}),
(dispatch)=>({
    onDelTask: taskId=> dispatch({
        type:TYPE_TODO_DEL,
        payload:{taskId}
    }),
    onToggleTask: taskId=> dispatch({
        type:TYPE_TODO_TOGGLE,
        payload:{taskId}
    })
})

)
export default TodoListStore(TodoList)
