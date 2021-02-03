import { useState } from "react";
import { addTask } from "../actions";
import { connect } from "react-redux";

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const dispatchTask = (event) => {
    addTask(taskName);
    event.preventDefault();
  };
  return (
    <div className="flex-container">
      <form onSubmit={dispatchTask}>
        <input
          type="text"
          placeholder="Add A New Task"
          onChange={(event) => setTaskName(event.target.value)}
        />
        <input type="submit" className="btn" value="Add" />
      </form>
    </div>
  );
}

export default connect(null, { addTask })(AddTask);
