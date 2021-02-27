import React from 'react'

const boardRowStyle = {
  display: 'flex',
  flexWrap: 'nowrap',
}

const BoardRow = props => (
  <div style={boardRowStyle} {...props} />
)

export default BoardRow
