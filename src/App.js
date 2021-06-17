import React from 'react';
import './App.css';

import Form from './components/Form';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Tasks</h1>
      </header>
      <div className="body">
        <Form />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
