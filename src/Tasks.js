import { connect } from "react-redux";
import Task from "./Task";

function Tasks(props) {
  const { tasks, activeTask } = props;

  let totalTime = 0;
  Object.values(tasks).forEach((task) => {
    totalTime += task.elapsedTime;
  });

  let todos = Object.values(tasks).map((task) => {
    return <Task task={task} key={task.id} />;
  });

  return (
    <div>
      <h2>Tasks:</h2>
      <div>{todos}</div>
      <div className="timeDiv">
        {activeTask === null
          ? "No Active Task"
          : `Active task ID is ${activeTask}`}
      </div>

      <div className="timeDiv">
        Total elapsed time is{" "}
        {totalTime === 0
          ? "00:00"
          : new Date(totalTime * 1000).toISOString().substr(14, 5)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    activeTask: state.activeTask,
  };
};

export default connect(mapStateToProps)(Tasks);
