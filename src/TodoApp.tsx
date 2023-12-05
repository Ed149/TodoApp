import { useState } from 'react'
import { Header } from './components/Header'
import { CreateToDo } from './components/CreateToDo'
import { TodoInterface } from './interfaces/Todo.interface'
import { TodoList } from './components/TodoList'
import { TodoControl } from './components/TodoControl'

export const TodoApp = () => {
    const [theme, setTheme] = useState('dark')
    const [todos, setTodos] = useState<TodoInterface[]>([])
    const [actualTodos, setActualTodos] = useState<TodoInterface[]>([]);
    const [active, setActive] = useState('all');

    const handleThemeChange = () => {
        theme == 'dark' ? setTheme('light') : setTheme('dark');
    }

    const createToDo = (newTodo: TodoInterface) => {
        console.log("NewTodo", newTodo);
        let newTodos:TodoInterface[] = [...todos, newTodo];
        setTodos(newTodos);
        setActualTodos(newTodos);
        
    }

    const deleteTodo = (id:number) => {
        let updatedTodo = todos.filter((elem) => elem.id != id);
        setTodos(updatedTodo);
        setActualTodos(updatedTodo);

    }

    const clearDoneTodos = () => {
        let updatedTodos = todos.filter(el => el.isDone != true);
        setTodos(updatedTodos);
        setActualTodos(updatedTodos);
    }

    const updateTodo = (todo:TodoInterface) => {
        let edited = todos.map((element) => {
            if (element.id != todo.id) {
                return element;
            } else {
                return {
                    ...element,
                    isDone: !element.isDone
                };
            }
        })
        console.log(edited);
        setTodos(edited);
        setActualTodos(edited);
    }


    const getTodos = (e:any) => {
        e.preventDefault();
        actualTodos.length == 0 ? setActualTodos(todos) : "";
        let activeTodos = [];
        switch (e.target.id) {
            case "all":
                setTodos(actualTodos);
                setActive('all');
                break;
            case "active":
                activeTodos = actualTodos.filter(el => el.isDone == false);
                console.log("activeTodos",activeTodos);
                setTodos(activeTodos);
                setActive('active')
                break;
            case 'completed':
                activeTodos = actualTodos.filter(el => el.isDone == true);
                setTodos(activeTodos);
                setActive('completed');
                break;
        }
    }



    return (
        <>
            <Header />
            <div className="wrapper">
                <section className="card">
                    <div className="card__title">
                        <h1>TODO</h1>
                        <a href="#" id={theme} className={`icon card__icon_${theme}`} onClick={handleThemeChange}></a>
                    </div>

                    <div className="card__todo">
                        <CreateToDo
                            theme={theme}
                            createTodo={createToDo}
                        />
                        {todos.length > 0 || actualTodos.length ?
                            (<TodoList
                                todos={todos}
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo}
                                clearDoneTodos={clearDoneTodos}
                            />)
                            : ""}
                    </div>

                    {
                        todos.length > 0 || actualTodos.length > 0 ?
                            (<TodoControl
                                getTodos={getTodos}
                                active={active}
                            />) : ""
                    }


                </section>
            </div>

        </>
    )
}
