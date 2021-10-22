import { createStore } from "redux"

import { Task } from "./models/Task"
import { Action } from "./models/Action"
const TYPE_TODO_ADD="todo/add"
const initialState={
  todos:[new Task(1,"task1",true),
         new Task(2,"task2",true)]
}
//Reducer function
const TodoReducer=(state=initialState.todos,action=new Action())=>{
    switch(action.type){
        case TYPE_TODO_ADD:return [...state,new Task(state.length +1,action.payload.title,action.payload.iscompleted)]
        default:return state
    }
}
//use of the reducer
const store=createStore(TodoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  store.subscribe(()=>console.log(store.getState()))

  store.dispatch(
  {
    type:TYPE_TODO_ADD,
    payload:new Task(3,"task3")
  }
)
console.log(store.getState())