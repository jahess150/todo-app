import React from 'react';

function TodoItem({ task, toggleTaskCompletion }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.text}
            </span>
        </li>
    );
}

export default TodoItem;