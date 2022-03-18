import React, { useState }  from 'react'

import { boardDefault } from "../Words";

function Board() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="board">
      {" "}

    </div>
  )
}

export default Board