const todoSelectorWithFilter=state=>{
    if(state.filterQuery==="")
    return state.todos
    else 
    return state.todos.filter(t=>t.title.includes(state.filterQuery))
}


export const todosSelector =(state)=>({
    todos:todoSelectorWithFilter(state)
})