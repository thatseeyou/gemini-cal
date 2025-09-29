import React, { useState } from 'react';
import Calendar from './Calendar';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="App">
      <Calendar currentDate={currentDate} onDateChange={setCurrentDate} />
    </div>
  );
}

export default App;
