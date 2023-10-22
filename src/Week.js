import React, { useState } from 'react';
import Day from './Day';

const Week = ({ days, onDayClick, activeDay, onAddTask, onRemoveTask }) => {
  const calculateTotalDuration = (tasks) => {
    let totalDuration = 0;
    for (const task of tasks) {
      const start = new Date(`2023-01-01 ${task.startTime}`);
      const end = new Date(`2023-01-01 ${task.endTime}`);
      totalDuration += (end - start) / (60 * 1000); 
    }
    return totalDuration;
  };

  return (
    <div className="week">
      {days.map((day, index) => (
        <div
          key={index}
          onClick={() => onDayClick(day)}
          className={`day ${activeDay === day ? 'active' : ''}`}
        >
          <Day day={day} />
          <div>
            <p>Tasks: {day.tasks.length}</p>
            <p>Total Duration: {calculateTotalDuration(day.tasks)} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Week;

