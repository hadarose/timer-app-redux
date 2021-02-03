import Tasks from "./Tasks";
import AddTask from "./AddTask";
import TotalTime from "./TotalTime";

function MainPage() {
  return (
    <div>
      <AddTask />

      <Tasks />

      <TotalTime />
    </div>
  );
}

export default MainPage;
