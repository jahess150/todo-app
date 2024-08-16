import React from 'react';

function TodoItem({ task, toggleTaskCompletion }) {
    return (
        <li className={task.priority}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}} className={task.priority}>
                {task.text} - <strong>{task.priority} Priority</strong>
            </span>
        </li>
    );
}

export default TodoItem;