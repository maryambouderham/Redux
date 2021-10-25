import { Action } from "../../models/Action"
import { Task } from "../../models/Task"
import { TYPE_TODO_ADD, TYPE_TODO_DEL, TYPE_TODO_FILTER, TYPE_TODO_TOGGLE } from "../types/todo"
const initialState={
   todos:[ new Task(1,"create component"),
    new Task(2,"create state and props"),
    new Task(3,"create store"),
    new Task(4,"create actions"),
    new Task(5,"create types")],
    todosBackup:[ new Task(1,"create component"),
    new Task(2,"create state and props"),
    new Task(3,"create store"),
    new Task(4,"create actions"),
    new Task(5,"create types")]
}
export const TodoReducer =(state=initialState,action= new Action())=>{
    switch(action.type){
        case TYPE_TODO_ADD:{
            let newTask=new Task(state.todos.length+1,action.payload.taskTitle)
            let newList=[...state.todos,newTask]
            return{
                todos:newList,
                todosBackup:newList
            }
        }
        case TYPE_TODO_DEL:{
            let newList=[...state.todos.filter(t=>t.id!==action.payload.taskId)]
            return{
                todos:newList,
                todosBackup:newList
            }
        }
        case TYPE_TODO_TOGGLE:{
            let newList=[
                ...state.todos.map(t=>{
                    if (t.id==action.payload.taskId)
                    t.iscompleted=!t.iscompleted
                    return t
                })
            ]
            return{
                todos:newList,
                todosBackup:newList
            }
        }
       case TYPE_TODO_FILTER:{
           let newList=[]
           if (action.payload.query==="")
                newList=[...state.todosBackup]
            else{
                newList=[...state.todosBackup.filter(t=>t.title.includes(action.payload.query))]
            }
           return{
               ...state,todos:newList
           }

       }
  
            
        default : return state
    }
}