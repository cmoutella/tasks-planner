import React, { useState } from 'react';

const Subtask = ({subtask, subtasks, setSubtasks, addSubtask, setAddSubtask}) => {
  const [done, setDone] = useState(subtask.done)

  const handleStatus = () => {
    setDone(!done)

    setSubtasks(subtasks.map((s) => {
      if (s.id === subtask.id) {

        return {
          ...s, done: done
        }
      }
      return s;
    }))
  }

  const handleDelete = () => {
    setSubtasks(subtasks.filter((s) => s.id !== subtask.id));
  }

  const handleAdd = () => {
    setAddSubtask(true);
  }

  return (
    <li 
      className={`subtask df df-a-c df-j-sb ${done ? 'done' : ''}`}
      key={subtask.id}>
        <div className="subtask-header df df-a-c">
          <input 
            type="checkbox"
            name="subtask"
            id={`subtask-${subtask.id}`}
            checked={done}
            onChange={handleStatus} />
          <label htmlFor={`subtask-${subtask.id}`}>- {subtask.text}</label>
        </div>
        <div className="subtask-actions df df-a-c">
          <button 
            className="subtask-action subtask-trash df df-a-c df-j-c btn-danger"
            onClick={handleDelete}>x</button>
          <button 
            className="subtask-action subtask-add df df-a-c df-j-c"
            onClick={handleAdd}>+</button>
        </div>
    </li>
  )
}

export default Subtask;