import { startTimer, stopTimer } from "../actions";
import { connect } from "react-redux";

function Task({ task, activeTask, stopTimer, startTimer }) {
  const elapsedTime = new Date(task.elapsedTime * 1000)
    .toISOString()
    .substr(14, 5);

  const handleClick = () => {
    if (activeTask === task.id) {
      stopTimer();
      return;
    }
    startTimer(task.id);
  };

  return (
    <div className="flex-container">
      <div className="flex-child">
        <div className="task-name">
          <b>{task.name}</b>
        </div>
      </div>

      <div className="flex-child">
        <div className="task-time">{elapsedTime}</div>
      </div>

      <div className="flex-child">
        <button className="btn" onClick={handleClick}>
          <i
            className={activeTask === task.id ? "fa fa-pause" : "fa fa-play"}
          />
        </button>
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

export default connect(mapStateToProps, { startTimer, stopTimer })(Task);
