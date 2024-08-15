import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false};
    setTasks([...tasks, newTask]);
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
      <AddTodo addTask={addTask}/>
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion}/>
    </div>
  );
}

export default App;
