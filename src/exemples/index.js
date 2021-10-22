import { Action } from "../models/Action"
import { Task } from "../models/Task"
//initialisation
const initialState={
    todos:[new Task(1,"task1",true),
           new Task(2,"task2",true)]
}
const TYPE_TODO_ADD="todo/add"
//Reducer function
const TodoReducer=(state,action=new Action())=>{
    switch(action.type){
        case "todo/add":return [...state,new Task(state.length +1,action.payload.title,action.payload.iscompleted)]
        default:return state
    }
}
//utilisation

const newStateTodo1=TodoReducer(initialState,new Action(TYPE_TODO_ADD,new Task(3,"title3",true)))
console.table(newStateTodo1)