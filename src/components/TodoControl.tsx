export const TodoControl = ({getTodos,active}:any) => {


    return (
        <div className="card__list_actions shadow ">
            <button id="all" className={`fw-700 ${active == "all" ? "active" : ""} btn`} onClick={getTodos}>All</button>
            <button id="active" className={`fw-700 ${active == "active" ? "active" : ""} btn`} onClick={getTodos}>Active</button>
            <button id="completed" className={`fw-700 ${active == "completed" ? "active" : ""} btn`} onClick={getTodos}>Completed</button>
        </div>
    )
}
