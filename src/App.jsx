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
  },
  {
    id: 4,
    title: 'Go Grocery Shopping',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  // Toggle a task
  const handleToggleComplete = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, isComplete: !task.isComplete }
          : task
      )
    );
  };
  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList 
          tasks={tasks} 
          handleToggleComplete = {handleToggleComplete} 
          handleDeleteTask = {handleDeleteTask} />}
        </div>
      </main>
    </div>
  );
};

export default App;
