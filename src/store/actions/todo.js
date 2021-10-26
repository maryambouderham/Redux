import { TYPE_TODO_ADD, TYPE_TODO_DEL, TYPE_TODO_FILTER, TYPE_TODO_TOGGLE, TYPE_UPDATE_FILTER } from "../types/todo"

export const deleteTaskAction = (taskId) => ({
    type: TYPE_TODO_DEL,
    payload: { taskId }
})
export const toggleTaskAction = (taskId) => ({
    type: TYPE_TODO_TOGGLE,
    payload: { taskId }
})


export const onAddTaskAction = (taskTitle) => ({
    type: TYPE_TODO_ADD,
    payload: { taskTitle }
})

export const updateFilterAction =(filterValue)=>({
    type:TYPE_UPDATE_FILTER,
    payload:{filterValue}
})