import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

/* Styles */
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle Game</h1>
        <Board />
        <Keyboard />
      </nav>
    </div>
  )
}

export default App;
