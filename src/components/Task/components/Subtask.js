import React from 'react';

const Subtask = ({subtask, handleStatus}) => {
  return (
    <li 
      className={`task-subtasks-item df df-a-c ${subtask.done ? 'done' : ''}`}
      key={subtask.id}>
        <input 
          type="checkbox"
          name="subtask"
          id={`subtask-${subtask.id}`}
          data-id={subtask.id}
          onChange={handleStatus} />
        <label htmlFor={`subtask-${subtask.id}`}>{subtask.text}</label>
    </li>
  )
}

export default Subtask;