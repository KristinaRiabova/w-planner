import React, { useState } from 'react';

const NewTaskForm = ({ onAddTask, day }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleAddTask = () => {

    const newTask = {
      title: title,
      description: description,
      startTime: startTime,
      endTime: endTime,
    };


    onAddTask(day, newTask);


    setTitle('');
    setDescription('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <div className="new-task-form">
      <h4>Add New Task</h4>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="time"
        placeholder="Start Time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="time"
        placeholder="End Time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button
        className="btn btn-success"
        onClick={handleAddTask}
        disabled={!title || !description || !startTime || !endTime}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTaskForm;





