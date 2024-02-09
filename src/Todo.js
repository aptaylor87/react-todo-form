import React from "react";
import "./Todo.css"

function Todo({ id, task, deleteMe }) {
    const handleDelete = () => {
        deleteMe(id)
    }
    return (
        <div className="Todo" id={id}>{task}
        <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Todo;