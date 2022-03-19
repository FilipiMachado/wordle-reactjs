import { createContext, useState } from 'react';
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from './Words';
/* Styles */
import './App.css'

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  return (
    <div className="App">
      <nav>
        <h1>Wordle React.JS</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App;
