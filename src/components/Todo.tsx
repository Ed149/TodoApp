import React from 'react'

export const Todo = ({handleChange,todo}:any) => {
    
    return (
        <div className="todo">
            <div className="todo__info">

            <div className="todo__icon"></div>
            <input className="todo__value" type="text" value={todo} placeholder="Create a new todo..." onChange={handleChange} />
            </div>
        </div>
    )
}
