import { connect } from "react-redux";

function TotalTime(props) {
  const { tasks } = props;
  let totalTime = 0;
  Object.values(tasks).forEach((task) => {
    totalTime += task.elapsedTime;
  });

  return (
    <div className="msgDiv">
      Total elapsed time is{" "}
      {new Date(totalTime * 1000).toISOString().substr(14, 5)}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    activeTask: state.activeTask,
  };
};

export default connect(mapStateToProps)(TotalTime);
