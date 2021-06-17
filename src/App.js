import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TasksList from './components/TasksList';

function App() {
  // State Handlers
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Tasks</h1>
      </header>
      <div className="body">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          tasks={tasks}
          setTasks={setTasks} />
        <TasksList 
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
