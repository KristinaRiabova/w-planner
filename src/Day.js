import React from 'react';
import Task from './Task';

const Day = ({ day }) => {
  return (
    <div className="day">
      <h3>{day.date}</h3>
      {day.tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

export default Day;






