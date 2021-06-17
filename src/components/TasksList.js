import React from 'react';

import Task from './Task';

const TasksList = ({ tasks }) => {
  return(
    <ul className="tasks-list">
      {tasks.map((task) => (
        <Task 
          task={task}
          key={task.id} />
      ))}
    </ul>
  )
}

export default TasksList;