import React from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

const DayExpanded = ({ day, onAddTask, onRemoveTask, isCommonSchedule }) => {
  return (
    <div className="day-expanded">
      <h3>{day.date}</h3>
      <NewTaskForm onAddTask={onAddTask} day={day} />
      <div className="task-list">
        {day.tasks.length > 0 ? (
          day.tasks.map((task, index) => (
            <div key={index} className="task">
              <Task task={task} />
              {isCommonSchedule ? null : ( 
                <button className="btn btn-danger" onClick={() => onRemoveTask(day, index)}>
                  Remove
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No tasks planned for this day.</p>
        )}
      </div>
    </div>
  );
};

export default DayExpanded;

