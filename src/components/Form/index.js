import React from 'react';
import './index.css';

const Form = ({ inputText, setInputText, tasks, setTasks, setFilterState }) => {
  const handleInput = (e) => {
    setInputText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, Task(inputText)]);
    setInputText("");
  }
  const setFilter = (e) => {
    setFilterState(e.target.value);
  }
  const Task = (title) => {
    return {
      title: title,
      id: Math.random(),
      status: 'created',
      subtasks: [
        {
          id: Math.random(),
          text: 'Restructure Data'
        },
        {
          id: Math.random(),
          text: 'Display new structure'
        },
        {
          id: Math.random(),
          text: 'Style'
        },
        {
          id: Math.random(),
          text: 'Input Subtasks'
        },
        {
          id: Math.random(),
          text: 'Show % completude'
        }
      ]      
    }
  }

  return(
    <form className="app-form">
      <div className="new-input">
        <input 
          value={inputText}
          className="task-input" 
          type="text"
          onChange={handleInput} />
        <button 
          className="btn btn-default task-submit"
          onClick={handleSubmit}
          disabled={inputText === ""}>
          Add Task
        </button>
      </div>
      <div className="select">
        <select 
          className="task-filter"
          name="tasks"
          onChange={setFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  )
}

export default Form;