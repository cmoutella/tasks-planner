import React from 'react';

import Task from './Task/index';

const TasksList = ({ tasks, setTasks, filteredTasks }) => {
  return(
    <ul className="tasks-list">
      {filteredTasks.map((task) => (
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