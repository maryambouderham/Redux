import { useState } from "react";
import { Provider } from "react-redux";
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

import store from "./store";



const App=()=> {
  
  return (
    <Provider store={store}>
    <div className="container">
            <TodoAdd/>
            <hr/>
            <TodoFilter/>
            <TodoList 
            />
    </div>
    </Provider>
  );
}

export default App;
