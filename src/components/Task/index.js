import React from 'react';
import './index.css';

const Task = ({ task, tasks, setTasks }) => {
  const handleDone = (e) => {
    setTasks(tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item, completed: !item.completed, status: 'done'
        };
      }
      return item;
    }))
  }
  const handleDelete = (e) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return(
    <li className={`task ${task.status} ${task.completed ? "task-completed" : "" }`}>
      <div className="task-header df df-a-c df-j-sb">
        <p className="task-title">{task.title}</p>
        <div className="task-status df">
          <p className={`task-status-tag`}>{task.status}</p>
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

/**
 * {
 *    title:
 *    id:
 *    status:
 *    subtasks: [
 *        {
 *          text:
 *          id:
 *        }
 *    ]
 * }
 */