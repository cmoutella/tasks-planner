import React, { useState } from 'react';
import './index.css';

import Subtask from './components/Subtask';

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

  const handleSubTaskClick = (e) => {
    const elId = Number(e.target.dataset.id);
    
    setTasks(tasks.map((item) => {
      if (item.id === task.id) {    
        console.log(item);
        handleSubTaskStatus(item, elId);
        console.log(item);
        return item;
      }
      return item;
    }))
  }

  // why doesnt it work?
  const handleSubTaskStatus = (currentTask, idParam) => {
    currentTask.subtasks.map((i) => {
      if (i.id === idParam) {
        return {
          ...i, done: !i.done
        }
      }
      return i;
    })
  }

  const handleExpand = () => {
    setExpanded(!expanded);
  }

  return (
    <li 
      className={`task ${task.status} ${expanded ? 'expanded' : ''}`}>
      <div 
        className="task-header df df-a-c df-j-sb"
        onClick={handleExpand}>
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
            <Subtask
              subtask={item}
              handleStatus={handleSubTaskClick}
              key={item.id} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Task;