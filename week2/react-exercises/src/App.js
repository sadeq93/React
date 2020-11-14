import './App.css';
import Friend from './components/Friend';
import Dog from './components/Dog';
import Joke from './components/Joke';
function App() {
  return (
    <div className="App">
    <h1>EX 1</h1>
    <Friend/>
    <hr/>
    <h1>EX 2</h1>
    <Dog/>
    <hr/>
    <h1>EX 3</h1>
    <Joke/>
    </div>
  );
}

export default App;
