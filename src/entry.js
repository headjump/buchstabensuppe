import React from 'react'
import ReactDom from 'react-dom'
import 'normalize.css'

import './index.html'
import './style/app.scss'

import Letter from './Letter'

const App = () => {
  return (
    <>
      <h1>HELLO!</h1>
      <Letter key={1} value='ä' upper font={1}/>
      <Letter key={2} value='ä' upper font={2}/>
      <Letter key={3} value='ä' upper font={3}/>
      <Letter key={4} value='ä' upper font={4}/>
      <Letter key={5} value='ä' upper font={5}/>
      <Letter key={6} value='ä' upper font={6}/>
      <Letter key={7} value='ä' upper font={7}/>
      <Letter key={8} value='ä' upper font={8}/>
      <Letter key={9} value='ä' upper font={9}/>
      <Letter key={10} value='ä' upper font={10}/>
      <Letter key={11} value='ä' upper font={11}/>
    </>
  )
}

ReactDom.render(
  (<App />),
  document.getElementById('app')
)
