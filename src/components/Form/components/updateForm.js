import React, { useState, useEffect } from 'react';

const UpdateForm = ({ type, value, setValue, setUpdating }) => {
  const [inputText, setInputText] = useState(value);
  
  useEffect(() => {
    handleFocus();
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue(inputText);
    setUpdating(false);
  }
  const handleChange = (e) => {
    setInputText(e.target.value);
  }
  const handleFocus = () => {
    const input = document.querySelector('.update-form > .update-input');
    input.focus();
  }

  return (
    <form className="update-form">
      <input 
        value={inputText} 
        type="text" 
        className={`${type}-input update-input`}
        onChange={handleChange} />
      <button 
        className="hidden"
        onClick={handleSubmit}
        disabled={inputText === ""}></button>
    </form>
  )
}

export default UpdateForm;