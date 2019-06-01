import 'normalize.css'

import './index.html'
import './style/app.scss'

import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
  return (
    <h1>HELLO!</h1>
  )
}

ReactDom.render(
  (<App />),
  document.getElementById('app')
)
