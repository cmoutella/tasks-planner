import React from 'react';

import Task from './Task';

const TasksList = () => {
  return(
    <ul className="tasks-list">
      <Task />
      <Task />
      <Task />
    </ul>
  )
}

export default TasksList;