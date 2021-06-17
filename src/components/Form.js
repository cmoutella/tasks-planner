import React from 'react';

const Form = () => {
  return(
    <form className="app-form">
      <div className="new-input">
        <input className="todo-task" type="text" />
        <button className="btn btn-default todo-submit">Add Task</button>
      </div>
      <div className="select">
        <select className="todo-filter" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  )
}

export default Form;