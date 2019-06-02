import React from 'react'

const Letter = ({ value, font, upper, lower }) => {
  const classNames = [
    `letter`,
    `letterfont--${font}`,
    upper ? 'letter--uppercase' : '',
    lower ? 'letter--lowercase' : ''
  ]
  return (
    <div className={classNames.join(' ')}>
      {value}
    </div>
  )
}

export default Letter
