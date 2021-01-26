import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";
import Tasks from "./Tasks";

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const dispatchTask = (event) => {
    addTask(taskName);
    event.preventDefault();
  };

  return (
    <div>
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
      <Tasks />
    </div>
  );
}

export default connect(null, { addTask })(AddTask);
