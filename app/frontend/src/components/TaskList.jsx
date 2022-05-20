import React from 'react';
import PropTypes from 'prop-types';

export default function TaskList({ taskList, onDelete }) {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <p>{task.id}</p>
          <p>{task.state}</p>
          <p>{task.description}</p>
          <p>{task.createdAt}</p>
          <button type="button" onClick={() => onDelete(task.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number,
      state: PropTypes.string,
      description: PropTypes.string,
      createdAt: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
