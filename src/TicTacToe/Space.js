import React, { useState } from 'react'

const spaceStyle = {
  padding: 10,
  height: 25,
  width: 25,
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const makeRGBA = (r,g,b) => opacity => `rgba(${r},${g},${b},${opacity})`
const makeXColor = makeRGBA(255,0,0)
const makeOColor = makeRGBA(0,0,255)

const selectedOpacity = 0.5
const hoverOpacity = 0.2

const spaceXSelectedStyle = {
  ...spaceStyle,
  background: makeXColor(selectedOpacity),
}

const spaceOSelectedStyle = {
  ...spaceStyle,
  background: makeOColor(selectedOpacity),
}

const spaceXHoverStyle = {
  ...spaceStyle,
  cursor: 'pointer',
  background: makeXColor(hoverOpacity),
}

const spaceOHoverStyle = {
  ...spaceStyle,
  cursor: 'pointer',
  background: makeOColor(hoverOpacity),
}

const Space = ({player, currentPlayer, onClick}) => {
  const [ hovering, setHovering ] = useState(false)
  let style = spaceStyle
  if (player)
    style = player === 'X' ? spaceXSelectedStyle : spaceOSelectedStyle
  else if (hovering)
    style = currentPlayer === 'X' ? spaceXHoverStyle : spaceOHoverStyle

  return(
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      style={style}
    >
      <p>
        {player}
      </p>
    </div>
  )
}

export default Space
