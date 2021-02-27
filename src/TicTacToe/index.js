import React, { useReducer } from 'react'
import Board from './Board'

import { getBoardLayout, winningPositions } from 'utilities'
import GameActionRow from './GameActionRow'

const historyReducer = (state, action) => {
  switch (action.type) {
    case 'addMove':
      return [ ...state, action.payload ]
    case 'undoMove':{
      const s = [...state]
      s.pop()
      return s
    }
    case 'clearGame':
      return []
  }
}

const calculateWinnerFromBoard = board => {
  for (const position of winningPositions) {
    const player = board[position[0].r][position[0].c]
    if (player && position.every(({r,c}) => board[r][c] === player))
      return player
  }
  if (board.every(row => row.every(col => col)))
    return 'No One'
  return false
}

const TicTacToe = () => {
  // History is an array of moves, {rowIndex, colIndex, player}
  const [ history, historyDispatch ] = useReducer(historyReducer, [])
  const currentPlayer = history.length % 2 === 0 ? 'X' : 'O'
  const board = history.reduce((board, move) => {
    board[move.rowIndex][move.colIndex] = move.player
    return board
  }, getBoardLayout())

  const winner = calculateWinnerFromBoard(board)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <h3>{winner} Wins!</h3>
      ) : (
        <>
          <h3>Current Player: {currentPlayer}</h3>
          <Board
            board={board}
            historyDispatch={historyDispatch}
            currentPlayer={currentPlayer}
          />
        </>
      )}
      <GameActionRow
        historyDispatch={historyDispatch}
      />
    </>
  )
}

export default TicTacToe
