import React, { useState } from 'react';
import './index.css';

const Form = ({ tasks, setTasks, setFilterState }) => {
  const [inputTask, setInputTask] = useState("");

  const handleInput = (e) => {
    setInputTask(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, Task(inputTask)]);
    setInputTask("");
  }
  const setFilter = (e) => {
    setFilterState(e.target.value);
  }
  
  const Task = (title) => {
    return {
      title: title,
      id: Math.random(),
      status: 'created',
      subtasks: []      
    }
  }

  return (
    <form className="app-form">
      <div className="new-input">
        <input 
          value={inputTask}
          className="task-input" 
          type="text"
          onChange={handleInput} />
        <button 
          className="btn btn-default task-submit"
          onClick={handleSubmit}
          disabled={inputTask === ""}>
          Add Task
        </button>
      </div>
      <div className="select">
        <select 
          className="task-filter"
          name="tasks"
          onChange={setFilter}>
          <option value="all">All</option>
          <option value="created">Created</option>
          <option value="started">Started</option>
          <option value="paused">Paused</option>
          <option value="done">Done</option>
        </select>
      </div>
    </form>
  )
}

export default Form;