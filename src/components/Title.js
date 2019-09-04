import React from 'react'

const Title = ({ children }) => {
  return (
    <div className='title'>
      <div className='title__inner'>
        { children }
      </div>
    </div>
  )
}

export default Title
