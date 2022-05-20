import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TaskForm({ onClick }) {
  const [description, setDescription] = useState('');
  const [taskState, setTaskState] = useState('');

  const handleclick = () => {
    onClick(description, taskState);
    setDescription('');
    setTaskState('');
  };

  return (
    <div>
      {}
      <form>
        <input
          type="text"
          name="description"
          placeholder="Digite sua tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          name="state"
          placeholder="Digite estado da tarefa"
          value={taskState}
          onChange={(event) => setTaskState(event.target.value)}
        />
        <button type="button" onClick={handleclick}>Adicionar</button>
      </form>
    </div>
  );
}

TaskForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};
