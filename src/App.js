import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
    /* ------ TASK FUNCTIONALITY ----- */

    // Initialize tasks and folders from local storage if available
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Save tasks to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add task with text, priority, and any tags
    const addTask = (taskText, priority, tags) => {
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
            priority: priority,
            tags: tags || [],
        };
        setTasks([...tasks, newTask]);
    };

    // Clear all current tasks
    const clearTasks = () => {
        setTasks([]);
    };

    // Toggle functionality
    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    /* ------ USER GREETING FUNCTIONALITY ------ */

    // Initialize name and greeting for when user enters site
    const [name, setName] = useState(localStorage.getItem("userName") || "");
    const [greeting, setGreeting] = useState("");

    // If the name is not stored, prompt the user for it
    useEffect(() => {
        if (!name) {
            const userName = prompt("Welcome! Please enter your name:");
            if (userName) {
                setName(userName);
                localStorage.setItem("userName", userName);
            }
        }
    }, [name]);

    // Determine the time of day and set greeting
    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) {
            setGreeting(`Good morning, ${name}!`);
        } else if (hours < 17) {
            setGreeting(`Good afternoon, ${name}!`);
        } else {
            setGreeting(`Good evening, ${name}!`);
        }
    }, [name]);

    return (
        <div className='App'>
            <header>
                <h1>{greeting}</h1>
            </header>
            <h1>Todo List</h1>
            <AddTodo addTask={addTask} clearTasks={clearTasks} />
            <TodoList
                tasks={filteredTasks}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </div>
    );
}

export default App;
