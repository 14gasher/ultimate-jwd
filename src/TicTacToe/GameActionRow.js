import React from 'react'

const rowStyle = { display: 'flex', marginTop: 30 }

const spacerStyle = {paddingRight: 30}

const GameActionRow = ({historyDispatch}) => (
  <div style={rowStyle}>
    <button
      onClick={() => historyDispatch({ type: 'undoMove' })}
    >
      Undo Move
    </button>
    <div style={spacerStyle} />
    <button
      onClick={() => historyDispatch({ type: 'clearGame' })}
    >
      Reset Game
    </button>
  </div>
)

export default GameActionRow
