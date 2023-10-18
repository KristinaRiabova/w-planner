import React from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';


const DayExpanded = ({ day }) => {
  return (
    <div className="day-expanded">
      <h3>{day.date}</h3>
      {day.tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
      <NewTaskForm />
    </div>
  );
};

export default DayExpanded;
