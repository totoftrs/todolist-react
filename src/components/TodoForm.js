/** @format */

import React, { useState, useRef, useEffect } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // revoir
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };
  return (
    <form action='' className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type='text'
            placeholder='Update Todo'
            type='text'
            value={input}
            onChange={handleChange}
            className='todo-input'
            ref={inputRef}
          />
          <button className='todo-button'>Modifier</button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Ajouter une tâche'
            type='text'
            value={input}
            onChange={handleChange}
            className='todo-input'
            ref={inputRef}
          />
          <button className='todo-button'>Ajouter</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
