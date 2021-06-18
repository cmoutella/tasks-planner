import React, { useState, useEffect } from 'react';
import './index.css';

import Subtask from './components/Subtask';
import SubtaskForm from '../Form/components/subtaskForm';

const Task = ({ task, tasks, setTasks }) => {
  const [expanded, setExpanded] = useState(false);
  const [subtasks, setSubtasks] = useState(task.subtasks);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status)

  useEffect(() => {
    updateTask();
  }, [subtasks, title, status])

  const handleStatus = (e) => {
    const toStatus = e.target.dataset.setStatus;
    setStatus(toStatus);
  }

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  const updateTask = () => {
    setTasks(tasks.map((t) => {
      if (t.id === task.id) {
        return {
          title: title,
          id: task.id,
          status: status,
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
      className={`task ${status} ${expanded ? 'expanded' : ''}`}>
      <div 
        className="task-header df df-a-c df-j-sb"
        onClick={handleExpand}>
          <p className="task-title df df-a-c"><span></span> {task.title}</p>
          <div className="task-status df">
            <button 
              className={`task-status-tag`}
              data-set-status={status === 'started' ? 'paused' : 'started'}
              onClick={handleStatus}>{status}</button>
            <div className="task-actions df">
              <button 
                className={`btn btn-success task-complete ${ status === 'done' ? 'hidden' : '' }`}
                data-set-status="done"
                onClick={handleStatus}>Done!</button>
              <button
                className="btn btn-danger task-trash"
                onClick={handleDelete}>Trash</button>
            </div>
          </div>
      </div>
      <div className={`task-body ${expanded ? '' : 'hidden'}`}>
        <ul className="subtasks">
          <SubtaskForm
            subtasks={subtasks}
            setSubtasks={setSubtasks} />
          {task.subtasks.map((item) => (
            <Subtask
              subtask={item}
              subtasks={subtasks}
              setSubtasks={setSubtasks}
              key={item.id} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Task;