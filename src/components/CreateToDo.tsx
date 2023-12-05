import { useState } from "react";
import { TodoInterface } from "../interfaces/Todo.interface";
import { Todo } from "./Todo";


export const CreateToDo = ({ theme = "dark", createTodo }: any) => {
  const [todo,setTodo] = useState('')

  const handleInputChange = (e:any) =>{
    setTodo(e.target.value)
  }
  const handleOnSubmit = (e:any) =>{
    e.preventDefault();
    console.log("submit")
    const newTodo:TodoInterface = {
      id:Math.floor(Math.random()*9999999),
      task:todo,
      isDone:false
    }
    createTodo(newTodo);
    setTodo('');
  }


  return (
    <form onSubmit={handleOnSubmit} className={`create__todo ${theme}`}>
      <Todo handleChange={handleInputChange} todo={todo}/>
    </form>
  )
}
