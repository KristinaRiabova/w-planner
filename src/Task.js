import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="task">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>{task.startTime} - {task.endTime}</p>
    </div>
  );
};

export default Task;



