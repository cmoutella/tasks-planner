import React from 'react';
import './index.css';

const Task = ({ task, tasks, setTasks }) => {
  const handleDone = () => {
    handleStatus('done');
  }

  const handleDoing = () => {
    switch (task.status) {
      case 'started':
        handleStatus('paused');
        break;
      default:
        handleStatus('started');
        break;
    }
  }

  const handleStatus = (param) => {
    setTasks(tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item, status: param
        };
      }
      return item;
    }))
  }

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return(
    <li className={`task ${task.status}`}>
      <div className="task-header df df-a-c df-j-sb">
        <p className="task-title">{task.title}</p>
        <div className="task-status df">
          <button 
            className={`task-status-tag`}
            onClick={handleDoing}>{task.status}</button>
          <div className="task-actions df">
            <button 
              className="btn btn-success task-complete"
              onClick={handleDone}>Done!</button>
            <button
              className="btn btn-danger task-trash"
              onClick={handleDelete}>Trash</button>
          </div>
        </div>
      </div>
      <div className="task-body">
        <ul className="task-subtasks">
          <li className="task-subtasks-item">
            <input type="checkbox" name="subtask" id="subtask-01" />
            <label htmlFor="subtask-01">Subtask 1</label>
          </li>
          <li className="task-subtasks-item">
            <input type="checkbox" name="subtask" id="subtask-01" />
            <label htmlFor="subtask-01">Subtask 2</label>
          </li>
          <li className="task-subtasks-item">
            <input type="checkbox" name="subtask" id="subtask-01" />
            <label htmlFor="subtask-01">Subtask 3</label>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default Task;