import React from 'react';

const Form = ({ inputText, setInputText, tasks, setTasks }) => {
  // Improvements
  // Block submit for empty input

  const handleInput = (e) => {
    setInputText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, {text: inputText, completed: false, id: Math.random()}]);
    setInputText("");
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
          onClick={handleSubmit}>
          Add Task
        </button>
      </div>
      <div className="select">
        <select className="task-filter" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  )
}

export default Form;