import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <h1>Timer App</h1>

        <MainPage />
      </header>
    </div>
  );
}

export default App;
