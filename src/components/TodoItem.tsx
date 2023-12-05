import React from 'react'
import cross from '/src/assets/icon-cross.svg'

export const TodoItem = ({ todo, deleteTodo, updateTodo }: any) => {

    const handleDoneChange = () => {
        updateTodo(todo);
    }

    return (
        <div className="todo" >
            <div className={`todo__info ${todo.isDone == true ? "done" : ""}`}>
                <div className={`todo__icon`} onClick={handleDoneChange}></div>
                <p className="todo__value" id={todo.id} >{todo.task}</p>
            </div>
            <img className="cross" src={cross} onClick={() => deleteTodo(todo.id)} />
        </div>
    )
}
