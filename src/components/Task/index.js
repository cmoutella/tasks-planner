import React, { useState, useEffect } from 'react';
import './index.css';

const Task = ({ task, tasks, setTasks }) => {
  const [expanded, setExpanded] = useState(false);

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

  const handleExpand = () => {
    setExpanded(!expanded);
  }

  return(
    <li 
      className={`task ${task.status} ${expanded ? 'expanded' : ''}`}
      onClick={handleExpand}>
      <div className="task-header df df-a-c df-j-sb">
        <p className="task-title df df-a-c"><span></span> {task.title}</p>
        <div className="task-status df">
          <button 
            className={`task-status-tag`}
            onClick={handleDoing}>{task.status}</button>
          <div className="task-actions df">
            <button 
              className={`btn btn-success task-complete ${ task.status === 'done' ? 'hidden' : '' }`}
              onClick={handleDone}>Done!</button>
            <button
              className="btn btn-danger task-trash"
              onClick={handleDelete}>Trash</button>
          </div>
        </div>
      </div>
      <div className={`task-body ${expanded ? '' : 'hidden'}`}>
        <ul className="task-subtasks">
          {task.subtasks.map((item) => (
            <li className={`task-subtasks-item df df-a-c ${item.status}`} key={item.id}>
              <input type="checkbox" name="subtask" id={`subtask-${item.id}`} />
              <label htmlFor={`subtask-${item.id}`}>{item.text}</label>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Task;