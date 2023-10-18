import React from 'react';
import Day from './Day';

const Week = ({ days, onDayClick }) => {
  return (
    <div className="week">
      {days.map((day, index) => (
        <div key={index} onClick={() => onDayClick(day)} style={{ cursor: 'pointer' }}>
          <Day day={day} />
        </div>
      ))}
    </div>
  );
};

export default Week;
