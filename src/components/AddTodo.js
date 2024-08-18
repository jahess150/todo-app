import React, { useState } from "react";

function AddTodo({ addTask, clearTasks }) {
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState("Medium"); // Default priority is medium

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue.trim(), priority);
            setInputValue(""); // Clear input
            setPriority("Medium");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Add a new task'
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
            </select>
            <button id='add-task' type='submit'>
                Add Task
            </button>
            <button id='clear-tasks' type='button' onClick={clearTasks}>
                Clear Tasks
            </button>
        </form>
    );
}

export default AddTodo;
