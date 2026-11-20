import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
  {
    id: 3,
    title: 'Go For a Walk',
    isComplete: true,
  }
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const handleToggleComplete = (id) => {
  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === id
        ? { ...task, isComplete: !task.isComplete }
        : task
    )
   );
    };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} handleToggleComplete = {handleToggleComplete} />}</div>
      </main>
    </div>
  );
};

export default App;
