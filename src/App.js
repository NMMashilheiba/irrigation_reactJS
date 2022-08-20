import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div>col 2</div>
        <div>col 3</div>
      </div>
    </div>
  );
}

export default App;
