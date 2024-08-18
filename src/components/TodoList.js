import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTaskCompletion }) {
    // Sort tasks by priority
    const sortedTasks = [...tasks].sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return (
        <ul>
            {sortedTasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </ul>
    );
}

export default TodoList;
