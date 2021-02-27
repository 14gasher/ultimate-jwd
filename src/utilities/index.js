// all possible ways to win tic tac toe
export const winningPositions = [
  // Rows
  [
    { r: 0, c: 0 },
    { r: 0, c: 1 },
    { r: 0, c: 2 },
  ],
  [
    { r: 1, c: 0 },
    { r: 1, c: 1 },
    { r: 1, c: 2 },
  ],
  [
    { r: 2, c: 0 },
    { r: 2, c: 1 },
    { r: 2, c: 2 },
  ],
  // Cols
  [
    { c: 0, r: 0 },
    { c: 0, r: 1 },
    { c: 0, r: 2 },
  ],
  [
    { c: 1, r: 0 },
    { c: 1, r: 1 },
    { c: 1, r: 2 },
  ],
  [
    { c: 2, r: 0 },
    { c: 2, r: 1 },
    { c: 2, r: 2 },
  ],
  // Diagonals
  [
    { c: 0, r: 0 },
    { c: 1, r: 1 },
    { c: 2, r: 2 },
  ],
  [
    { c: 2, r: 0 },
    { c: 1, r: 1 },
    { c: 0, r: 2 },
  ],
]

// Returns a 3 x 3 array, filled with null
export const getBoardLayout = () => Array.from(
  Array(3), // 3 Rows
  () => Array.from(
    Array(3), // 3 Columns
    () => null
  )
)
