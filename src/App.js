import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import TasksList from './components/TasksList';

function App() {
  // State Handlers
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filterState, setFilterState] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    handleFilter();
  }, [tasks, filterState])

  const handleFilter = () => {
    switch (filterState) {
      case 'completed':
        setFilteredTasks(tasks.filter(task => 
          task.completed === true
        ))
        break;
      case 'incomplete':
        setFilteredTasks(tasks.filter(task => 
          task.completed === false
        ))
        break;
      default:
        setFilteredTasks(tasks)
        break;
    }
  }

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
          setTasks={setTasks}
          setFilterState={setFilterState} />
        <TasksList 
          tasks={tasks}
          setTasks={setTasks}
          filteredTasks={filteredTasks}
        />
      </div>
    </div>
  );
}

export default App;
