import { connect } from "react-redux";
import Task from "./Task";
import TotalTime from "./TotalTime";

function Tasks(props) {
  const { tasks, activeTask } = props;

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

      <TotalTime />
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
