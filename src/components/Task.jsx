import PropTypes from 'prop-types';

import './Task.css';

// eslint-disable-next-line react/prop-types
const Task = ({ task, isComplete, handleToggleComplete, handleDeleteTask }) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => handleToggleComplete(task.id)}
      >
        {task.title}
      </button>
      <button className="tasks__item__remove button" onClick={() => handleDeleteTask(task.id)}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  isComplete: PropTypes.bool.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default Task;
