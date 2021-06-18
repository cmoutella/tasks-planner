import React, { useState, useEffect } from 'react';
import './index.css';

import Subtask from './components/Subtask';

const Task = ({ task, tasks, setTasks }) => {
  const [expanded, setExpanded] = useState(false);
  const [subtasks, setSubtasks] = useState(task.subtasks);

  const handleStatus = (e) => {
    const toStatus = e.target.dataset.setStatus;

    setTasks(tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item, status: toStatus
        };
      }
      return item;
    }))
  }

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  const handleSubtaskStatus = (idParam, e) => {
    setSubtasks(subtasks.map((s) => {
      if (s.id === idParam) {

        return {
          ...s, done: !s.done
        }
      }
      return s;
    }))
  }

  const updateTask = (updatedTask: task, e) => {
    console.log(e.target)

    setTasks(tasks.map((t) => {
      if (t.id === task.id) {
        return {
          title: updatedTask.title,
          id: task.id,
          status: updatedTask.status,
          subtasks: subtasks
        }
      }
      return t;
    }))
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
              data-set-status={task.status === 'started' ? 'paused' : 'started'}
              onClick={handleStatus}>{task.status}</button>
            <div className="task-actions df">
              <button 
                className={`btn btn-success task-complete ${ task.status === 'done' ? 'hidden' : '' }`}
                data-set-status="done"
                onClick={handleStatus}>Done!</button>
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
              handleStatus={handleSubtaskStatus}
              parentTask={task}
              key={item.id} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Task;