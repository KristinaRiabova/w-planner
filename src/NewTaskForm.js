import React from 'react';

const NewTaskForm = () => {
  return (
    <div className="new-task-form">
      <h4>Add New Task</h4>
      <input type="text" placeholder="Title" />
      <input type="time" placeholder="Start Time" />
      <input type="time" placeholder="End Time" />
      <button className="btn btn-success">Add Task</button>
    </div>
  );
};

export default NewTaskForm;


