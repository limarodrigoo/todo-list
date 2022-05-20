import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

export default function Tasks() {
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);

  const onClick = (description, state) => {
    setTimeout(() => {
      setLoading(true);
    }, 300);
    axios.post('http://localhost:3001/tasks', {
      description,
      state,
      // userId: 1, implement user feature
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => console.log(response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  const onDelete = (id) => {
    setTimeout(() => {
      setLoading(true);
    }, 300);
    axios.delete(`http://localhost:3001/tasks/${id}`)
      .then((response) => console.log(response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    axios('http://localhost:3001/tasks')
      .then((result) => {
        setTaskList(result.data.result);
        setLoading(false);
        console.log(result);
      })
      .catch((e) => console.log(e));
  }, [loading]);

  return (
    <>
      <h1>To do List</h1>
      <TaskForm onClick={onClick} />
      {loading ? 'Loading...' : <TaskList taskList={taskList} onDelete={onDelete} />}
    </>
  );
}
