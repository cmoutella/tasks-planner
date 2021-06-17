import React from 'react';

const Form = () => {
  return(
    <form className="app-form">
      <div className="new-input">
        <input className="task-input" type="text" />
        <button className="btn btn-default task-submit">Add Task</button>
      </div>
      <div className="select">
        <select className="task-filter" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  )
}

export default Form;