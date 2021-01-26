import { connect } from "react-redux";
import _ from "lodash";

function TotalTime({ tasks }) {
  let totalTime = new Date(
    _.sum(_.values(tasks).map((task) => task.elapsedTime)) * 1000
  )
    .toISOString()
    .substr(14, 5);

  return <div className="message">Total elapsed time is {totalTime}</div>;
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    activeTask: state.activeTask,
  };
};

export default connect(mapStateToProps)(TotalTime);
