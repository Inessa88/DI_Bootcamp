import './App.css';
import Data from "./data.json";

export default function App() {

  return (
    <div className="App">
      <h1>Hi This is a title</h1>
      {Data.map(info => (
        <div key={info.id}><h1>{info.title}</h1><p>{info.content}</p></div>
      ))}
    </div>
  );
}