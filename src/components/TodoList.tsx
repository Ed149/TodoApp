import { TodoInterface } from '../interfaces/Todo.interface';
import { TodoItem } from './TodoItem'

export const TodoList = ({todos,deleteTodo,updateTodo,clearDoneTodos}:any) => {
    console.log(todos)
    
    let todosLeft = todos.filter((element:TodoInterface) => element.isDone == false );
    console.log(todosLeft)
    let leftLength =todosLeft.length; 



  return (
    <div className='todo__list shadow'>
        {
            todos.map((todo:any)=>(
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}></TodoItem>
            ))
        }
        <div className="todo__list_cta">
            <span>{leftLength} items left</span>
            <button onClick={clearDoneTodos} className='btn'>Clear completed</button>
        </div>
    </div>
  )
}
