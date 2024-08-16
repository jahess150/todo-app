import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  // Initialize tasks from local storage if available
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false};
    setTasks([...tasks, newTask]);
  }

  const clearTasks = () => {
    setTasks([]); // Set the tasks array to empty
  }

  // Toggle functionality
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? {...task, completed: !task.completed} : task
      )
    );
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTask={addTask} clearTasks={clearTasks}/>
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion}/>
    </div>
  );
}

export default App;
