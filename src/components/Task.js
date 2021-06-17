import React from 'react';

const Task = ({ task, tasks, setTasks }) => {
  const handleDone = (e) => {
    setTasks(tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }))
  }
  const handleDelete = (e) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return(
    <li className={`task ${task.completed ? "task-completed" : "" }`}>
      <p className="task-item">{task.text}</p>
      <div className="task-actions">
        <button 
          className="btn btn-success task-complete"
          onClick={handleDone}>Done!</button>
        <button
          className="btn btn-danger task-trash"
          onClick={handleDelete}>Trash</button>
      </div>
    </li>
  )
}

export default Task;