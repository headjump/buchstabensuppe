import React from 'react'

const LetterGrid = ({ children }) => {
  const wrappedLetters = children.map((letter) => {
    return (
      <div key={letter.key} className='letterGrid__item'>
        { letter }
      </div>
    )
  })
  return (
    <div className='letterGrid letterGrid--4perCol'>
      { wrappedLetters }
    </div>
  )
}

export default LetterGrid
