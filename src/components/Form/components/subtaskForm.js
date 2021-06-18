import React, { useState } from 'react';

const SubtaskForm = ({subtasks, setSubtasks, showForm, setShowForm}) => {
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
    setShowForm(false);
  }

  return (
    <li className={showForm ? '' : 'hidden'}>
      <form className="subtask-form df df-a-c">
        <input 
          type="text"
          className="subtask-input"
          onChange={handleInput} />
        <button 
          className="btn btn-default subtask-submit"
          onClick={handleAdd}>Add</button>
      </form>
    </li>
  )
}

export default SubtaskForm;