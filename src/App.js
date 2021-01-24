import "./App.css";
import { addTask } from "./actions/actions";
import { useState } from "react";
import { store } from "./store";
import Tasks from "./Tasks";

function App() {
  const [taskName, setTaskName] = useState("");
  const dispatchTask = () => {
    store.dispatch(addTask(taskName));
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      dispatchTask();
    }
  };

  return (
    <div>
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <h1>Timer App</h1>
        <div>
          <div className="flex-container">
            <div className="flex-child">
              <input
                type="text"
                placeholder="Task Name"
                onChange={(evt) => setTaskName(evt.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </div>

            <button className="addBtn" onClick={dispatchTask}>
              Add
            </button>
          </div>

          <Tasks />
        </div>
      </header>
    </div>
  );
}

export default App;
