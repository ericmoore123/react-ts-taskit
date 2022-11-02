import react, {useState, useEffect, useRef} from 'react';
import './App.css';

interface Task {
  name: string;
  id: number;
  urgency?: number;
}

let task1:Task = {name: "Take out trash", id: 1}

function App() {
  return (
    <div className="App">
      
        {task1.name}
        <br/>
        {task1.urgency}
    </div>
  );
}

export default App;
