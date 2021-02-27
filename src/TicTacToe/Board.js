import React from 'react'
import BoardRow from './BoardRow'
import Space from './Space'

const Board = ({board, historyDispatch, currentPlayer}) => {
  const onSpaceClick = (rowIndex, colIndex) => () => {
    historyDispatch({
      type: 'addMove',
      payload: {
        rowIndex,
        colIndex,
        player: currentPlayer,
      },
    })
  }
  return (
    <div>
      {
        board.map((row, rowIndex) => (
          <BoardRow key={'row_' + rowIndex}>
            {row.map((col, colIndex) => (
              <Space
                key={`row_${rowIndex}_col_${colIndex}`}
                player={col}
                currentPlayer={currentPlayer}
                onClick={onSpaceClick(rowIndex, colIndex)}
              />
            ))}
          </BoardRow>
        ))
      }
    </div>
  )
}

export default Board
