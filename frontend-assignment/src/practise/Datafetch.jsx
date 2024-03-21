import { useState, useEffect } from "react";
import axios from "axios";

function useTodo(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then((res) => setTodos(res.data.todos));
         setLoading(false);
    }, n*1000);

    axios.get("https://sum-server.100xdevs.com/todos")
    .then((res) => setTodos(res.data.todos));
    setLoading(false);
    return ()=>{
      clearInterval(interval);
    }
  }, [n]);
  
  return {todos, loading};
}
const Datafetch = () => {
  const { todos, loading } = useTodo(5);
  

  if(loading){
    return <div>loading...</div>
  }

  return (
    <div> {todos.map((todo,i) => 
      <Mycomponent key={i} todo={todo} />
    )}</div>
  )
}

function Mycomponent({todo}){
  
  return (
    <div>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </div>
  )
}

export default Datafetch


