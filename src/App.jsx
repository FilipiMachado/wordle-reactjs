import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from 'react';
import { boardDefault } from './Words';

export const AppContext = createContext();

/* Styles */
import './App.css'

function App() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <nav>
        <h1>Wordle Game</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App;
