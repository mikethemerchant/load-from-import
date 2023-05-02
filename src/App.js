import './App.css';
import data from './msheet.json';

function App() {
  
  return (
    <div className="App">
        <h1>why we are doing</h1>
        <h2> {data[1].NAME} </h2>
    </div>
  );
}

export default App;
