import { connect } from "react-redux";
import sum from "lodash/sum";
import values from "lodash/values";

const getTotalTime = (times) =>
  new Date(sum(times) * 1000).toISOString().substr(14, 5);

function TotalTime({ tasks }) {
  const times = values(tasks).map((task) => task.elapsedTime);

  return (
    <div className="message">Total elapsed time is {getTotalTime(times)}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    activeTask: state.activeTask,
  };
};

export default connect(mapStateToProps)(TotalTime);
