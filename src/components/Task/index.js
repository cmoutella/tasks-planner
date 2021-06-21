import React, { useState, useEffect } from 'react';
import './index.css';

import Subtask from './components/Subtask';
import SubtaskForm from '../Form/components/subtaskForm';

const Task = ({ task, tasks, setTasks }) => {
  // Data States
  const [subtasks, setSubtasks] = useState(task.subtasks);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [showProgress, setShowProgress] = useState(false); 
  const [progress, setProgress] = useState(Number(0));

  // View States
  const [expanded, setExpanded] = useState(false);
  const [showAddSubtask, setShowAddSubtask] = useState(false);

  useEffect(() => {
    updateTask();
  }, [subtasks, title, status])
  
  useEffect(() => {
    handleSubtaskForm();
  }, [subtasks, expanded])

  const handleStatus = (e) => {
    const toStatus = e.target.dataset.setStatus;
    setStatus(toStatus);
  }

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  const updateTask = async () => {
    await setTasks(tasks.map((t) => {
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
  const handleSubtaskForm = () => {
    setShowAddSubtask(subtasks.length < 1)
  }
  const handleProgress = () => {
    // needs to wait for subtasks to update;
    const subtasksCompleted = subtasks.filter((s) => s.done === true);
    const subtasksCompletedTotal = subtasksCompleted.length;
    const subtasksTotal = subtasks.length;
    let progress = subtasksCompletedTotal / subtasksTotal;

    progress = progress*100;

    console.log(subtasksCompleted);

    setProgress(progress);
    
    if (subtasksTotal <= 1 || subtasksCompletedTotal < 1) {
      setShowProgress(false);
    } else {
      setShowProgress(true);
    }
  }

  return (
    <li 
      className={`task ${status} ${expanded ? 'expanded' : ''}`}>
      <div 
        className="task-header df df-a-c df-j-sb"
        onClick={handleExpand}>
          <p className="task-title df df-a-c"><span></span> {showProgress? `${progress}%` : ""} {task.title}</p>
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
          
          {task.subtasks.map((item) => (
            <Subtask
              subtask={item}
              subtasks={subtasks}
              setSubtasks={setSubtasks}
              key={item.id}
              addSubtask={showAddSubtask}
              setAddSubtask={setShowAddSubtask}
              handleProgress={handleProgress} />
          ))}
        </ul>
        <SubtaskForm
          subtasks={subtasks}
          setSubtasks={setSubtasks}
          showForm={showAddSubtask}
          setShowForm={setShowAddSubtask}
          showSubtasks={setExpanded} />
      </div>
    </li>
  )
}

export default Task;