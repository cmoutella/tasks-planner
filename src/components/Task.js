import React from 'react';

const Task = ({ task }) => {
  return(
    <li className="task">
      <p className="task-item">{task.text}</p>
      <div className="task-actions">
        <button className="btn btn-success task-complete">Done!</button>
        <button className="btn btn-danger task-trash">Trash</button>
      </div>
    </li>
  )
}

export default Task;