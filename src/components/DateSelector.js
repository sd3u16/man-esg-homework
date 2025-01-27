import React from 'react';

function DateSelector({ selectedDate, setSelectedDate }) {
  return (
    <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
      <option value="2023-01-01">2023-01-01</option>
      <option value="2022-06-01">2022-06-01</option>
    </select>
  );
}

export default DateSelector;