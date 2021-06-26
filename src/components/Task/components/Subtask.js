import React, { useState, useEffect } from 'react';

import UpdateForm from '../../Form/components/updateForm';

const Subtask = ({subtask, subtasks, setSubtasks, setAddSubtask, deleteSubtask, handleProgress}) => {
  const [done, setDone] = useState(subtask.done);
  const [text, setText] = useState(subtask.text);
  const [textUpdating, setTextUpdating] = useState(false);

  useEffect(() => {
    setDone(subtask.done);
  }, [subtask])
  useEffect(() => {
    handleProgress();
  }, [done])
  useEffect(() => {
    updateSubtask()
  }, [text, done])


  const updateSubtask = () => {
    setSubtasks(subtasks.map((s) => {
      if (s.id === subtask.id) {

        return {
          text: text,
          id: subtask.id,
          done: done
        }
      }
      return s;
    }))
  }

  const handleStatus = async() => {
    await setSubtasks(subtasks.map((s) => {
      if (s.id === subtask.id) {

        return {
          ...s, done: !done
        }
      }
      return s;
    }))
  }

  const handleTextUpdate = (e) => {
    e.stopPropagation();
    setTextUpdating(true);
  }

  const handleDelete = () => {
    deleteSubtask(subtask.id);
  }

  const handleAdd = () => {
    setAddSubtask(true);
  }

  return (
    <li 
      className={`subtask df df-a-c df-j-sb ${done ? 'done' : ''}`}
      key={subtask.id}>
        <div className="subtask-header df df-a-c">
          <input 
            type="checkbox"
            name="subtask"
            id={`subtask-${subtask.id}`}
            checked={done}
            onChange={handleStatus} />
          <label
            className={textUpdating ? 'hidden' : ''}
            htmlFor={`subtask-${subtask.id}`}
            onClick={handleTextUpdate}>- {text}</label>
          <div className={`task-update-form ${textUpdating ? '' : 'hidden'}`}>
            <UpdateForm
              type="task"
              value={text}
              setValue={setText}
              setUpdating={setTextUpdating}
            />
          </div>
        </div>
        <div className="subtask-actions df df-a-c">
          <button 
            className="subtask-action subtask-trash df df-a-c df-j-c btn-danger"
            onClick={handleDelete}>x</button>
          <button 
            className="subtask-action subtask-add df df-a-c df-j-c"
            onClick={handleAdd}>+</button>
        </div>
    </li>
  )
}

export default Subtask;