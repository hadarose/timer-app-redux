import { connect } from "react-redux";
import Task from "./Task";

function Tasks({ tasks, activeTask }) {
  const todos = Object.values(tasks).map((task) => (
    <Task task={task} key={task.id} />
  ));

  const message =
    activeTask === null ? "No Active Task" : `Active task ID is ${activeTask}`;
  return (
    <div>
      <h2>Tasks:</h2>
      <div>{todos}</div>
      <div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  activeTask: state.activeTask,
});

export default connect(mapStateToProps)(Tasks);
