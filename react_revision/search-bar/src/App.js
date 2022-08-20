import "./App.css";
import Search from "./Components/Search"
import data from "./db.json"
function App() {
  return (
    <div className="App">
      <Search data={data} />
    </div>
  );
}

export default App;
