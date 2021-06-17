import React from 'react';

import Task from './Task';

const TasksList = ({ tasks, setTasks }) => {
  return(
    <ul className="tasks-list">
      {tasks.map((task) => (
        <Task 
          task={task}
          key={task.id}
          setTasks={setTasks}
          tasks={tasks} />
      ))}
    </ul>
  )
}

export default TasksList;