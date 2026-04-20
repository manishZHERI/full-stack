import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const { state, dispatch } = useContext(AppContext);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        text: taskText,
        completed: false
      }
    });

    setTaskText("");
  };

  const completedCount = useMemo(() => {
    console.log("Calculating...");
    return state.tasks.filter((task) => task.completed).length;
  }, [state.tasks]);

  return (
    <div className="container">
      <h1>Task Analytics</h1>

      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
              style={{
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Tasks: {state.tasks.length}</h3>
      <h3>Completed Tasks: {completedCount}</h3>
    </div>
  );
}

export default Analytics;
