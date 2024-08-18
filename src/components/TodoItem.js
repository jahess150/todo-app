import React from "react";

function TodoItem({ task, toggleTaskCompletion }) {
    return (
        <li className={task.priority.toLowerCase()}>
            <input
                type='checkbox'
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                }}
                className={task.priority}
            >
                {!task.tags.length ? `[${task.tags.join(", ")}] ` : ""}{" "}
                {task.text} - <strong>{task.priority} Priority</strong>
            </span>
        </li>
    );
}

export default TodoItem;
