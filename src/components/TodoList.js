import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'

import { deleteTaskAction, toggleTaskAction } from '../store/actions/todo'
import { todosSelector } from '../store/selectors/todo'
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
  todos: todosSelector(state)
}),
(dispatch) => ({
    onDelTask: taskId =>
        dispatch(deleteTaskAction(taskId)),
    onToggleTask: taskId =>
        dispatch(toggleTaskAction(taskId)),
}),

)
export default TodoListStore(TodoList)
