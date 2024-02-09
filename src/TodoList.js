import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [tasks, setTasks] = useState([])
    const deleteMe = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }
    const addTodo = (newTask) => {
        setTasks(tasks => [...tasks, {...newTask, id: uuid()}]);
    }
    return (
        <>
        <NewTodoForm addTodo={addTodo} />
        <ul className="TodoList">
            {tasks.map(({ id, task }) => <li><Todo id={id} task={task} deleteMe={deleteMe} /></li>)}
        </ul>
        </>
    )
}

export default TodoList;