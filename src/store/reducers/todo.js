import { Action } from "../../models/Action"
import { Task } from "../../models/Task"
import { TYPE_TODO_ADD, TYPE_TODO_DEL, TYPE_TODO_FILTER, TYPE_TODO_TOGGLE, TYPE_UPDATE_FILTER } from "../types/todo"
const initialState={
   todos:[ new Task(1,"create component"),
    new Task(2,"create state and props"),
    new Task(3,"create store"),
    new Task(4,"create actions"),
    new Task(5,"create types")],
    filterQuery:""
}
export const TodoReducer =(state=initialState,action= new Action())=>{
    switch(action.type){
        case TYPE_TODO_ADD:
            return{
                ...state,
                todos:[...state.todos,new Task(state.todos.length+1,action.payload.taskTitle)]
             
            }
        
        case TYPE_TODO_DEL:{
           
            return{
                ...state,
                todos:[...state.todos.filter(t=>t.id!==action.payload.taskId)]
                
            }
        }
        case TYPE_TODO_TOGGLE:{
           
            return{
                ...state,
                todos:[
                    ...state.todos.map(t=>{
                        if (t.id==action.payload.taskId)
                        t.iscompleted=!t.iscompleted
                        return t
                    })
                ]
                
            }
        }
     case TYPE_UPDATE_FILTER:
         return{
             ...state,
             filterQuery:action.payload.filterValue
         }
  
            
        default : return state
    }
}