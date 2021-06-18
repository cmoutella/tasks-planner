import React, { useState } from 'react';

const SubtaskForm = ({subtasks, setSubtasks, showForm, setShowForm, showSubtasks}) => {
  const [inputValue, setInputValue] = useState("");
  
  const Subtask = (text) => {
    return {
      text: text,
      id: Math.random(),
      done: false
    }
  }
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }
  const handleAdd = (e) => {
    e.preventDefault();

    setSubtasks([...subtasks, Subtask(inputValue)])
    setInputValue("");
    setShowForm(false);
  }
  const handleDrop = (e) => {
    e.preventDefault();

    if (subtasks.length < 1) {
      showSubtasks(false);
      return;
    }
    setShowForm(false);
  }

  return (
    <div className={showForm ? '' : 'hidden'}>
      <form className="subtask-form df df-a-c">
        <input 
          value={inputValue}
          type="text"
          className="subtask-input"
          onChange={handleInput} />
        <button 
          className="btn btn-default subtask-btn subtask-btn-add"
          onClick={handleAdd}>Add</button>
        <button 
          className="btn btn-danger subtask-btn subtask-btn-trash"
          onClick={handleDrop}>-</button>
      </form>
    </div>
  )
}

export default SubtaskForm;