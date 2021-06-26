import React, { useState, useEffect } from 'react';
import './index.css';

import Subtask from './components/Subtask';
import SubtaskForm from '../Form/components/subtaskForm';
import UpdateForm from '../Form/components/updateForm';

const Task = ({ task, tasks, setTasks }) => {
  // Data States
  const [subtasks, setSubtasks] = useState(task.subtasks);
  const [totalSubstasks, setTotalSubtasks] = useState(subtasks.length);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [showProgress, setShowProgress] = useState(false); 
  const [progress, setProgress] = useState(Number(0));
  const [titleUpdating, setTitleUpdating] = useState(false);

  // View States
  const [expanded, setExpanded] = useState(false);
  const [showAddSubtask, setShowAddSubtask] = useState(false);

  useEffect(() => {
    updateTask();
  }, [subtasks, title, status]);
  useEffect(() => {
    setSubtasks(task.subtasks);
  }, [task])
  useEffect(() => {
    handleSubtaskForm();
  }, [subtasks, expanded]);
  useEffect(() => {
    setTotalSubtasks(subtasks.length);
  }, [subtasks])
  useEffect(() => {
    handleProgress();
  }, [totalSubstasks])

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

  const handleTitleUpdate = (e) => {
    e.stopPropagation();
    setTitleUpdating(true);
  }
  const handleExpand = () => {
    setExpanded(!expanded);
  }
  const handleSubtaskForm = () => {
    setShowAddSubtask(subtasks.length < 1)
  }
  const handleSubtaskDelete = (id) => {
    setSubtasks(subtasks.filter((s) => s.id !== id));
  }
  const handleProgress = () => {  
    const subtasksCompleted = subtasks.filter((s) => s.done === true);
    const subtasksCompletedTotal = subtasksCompleted.length;
    const subtasksTotal = subtasks.length;
    let completionProgress = subtasksCompletedTotal / subtasksTotal;

    setProgress(completionProgress*100);

    if (completionProgress === 0) {
      setStatus('created')
    } else if (completionProgress === 1) {
      setStatus('done');
    } else {
      setStatus('started');
    }
    
    if ( completionProgress === 0 || completionProgress === 1 || subtasksTotal <= 1 || subtasksCompletedTotal <= 0) {
      setShowProgress(false);
    } else {
      setShowProgress(true);
    }
  }

  return (
    <li 
      className={`task ${status} ${expanded ? 'expanded' : ''}`}>
      <div 
        className='task-header df df-a-c df-j-sb'
        onClick={handleExpand}>
          <p className={`task-title df df-a-c ${titleUpdating ? 'hidden' : '' }`}
             onClick={handleTitleUpdate}>
            <span></span> {showProgress? `${progress}%` : ''} {task.title}
          </p>
          <div className={`task-update-form ${titleUpdating ? '' : 'hidden'}`}>
            <UpdateForm
              type="task"
              value={title}
              setValue={setTitle}
              setUpdating={setTitleUpdating}
            />
          </div>
          <div className='task-status df'>
            <button 
              className={`task-status-tag`}
              data-set-status={status === 'started' ? 'paused' : 'started'}
              onClick={handleStatus}>{status}</button>
            <div className='task-actions df'>
              <button 
                className={`btn btn-success task-complete ${ status === 'done' ? 'hidden' : '' }`}
                data-set-status='done'
                onClick={handleStatus}>Done!</button>
              <button
                className='btn btn-danger task-trash'
                onClick={handleDelete}>Trash</button>
            </div>
          </div>
      </div>
      <div className={`task-body ${expanded ? '' : 'hidden'}`}>
        <ul className='subtasks'>
          
          {task.subtasks.map((item) => (
            <Subtask
              subtask={item}
              subtasks={subtasks}
              setSubtasks={setSubtasks}
              key={item.id}
              addSubtask={showAddSubtask}
              deleteSubtask={handleSubtaskDelete}
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