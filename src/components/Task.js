import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  // If the task was saved with reminder checked add the reminder class. Used FaTimes for delete icon
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "steelblue", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
