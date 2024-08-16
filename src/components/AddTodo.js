import React, { useState } from 'react';

function AddTodo({ addTask, clearTasks }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue.trim());
            setInputValue(''); // Clear input
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
            />
            <button id="add-task" type="submit">Add Task</button>
            <button id="clear-tasks" type="button" onClick={clearTasks}>Clear Tasks</button>
        </form>
    );
}

export default AddTodo;