import React, { useState } from 'react';

const Subtask = ({subtask, subtasks, setSubtasks}) => {
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


  return (
    <li 
      className={`task-subtasks-item df df-a-c ${done ? 'done' : ''}`}
      key={subtask.id}>
        <input 
          type="checkbox"
          name="subtask"
          id={`subtask-${subtask.id}`}
          checked={done}
          onChange={handleStatus} />
        <label htmlFor={`subtask-${subtask.id}`}>- {subtask.text}</label>
    </li>
  )
}

export default Subtask;