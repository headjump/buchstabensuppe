import React, { useReducer } from 'react'

import reducer from './state/reducer'

import Dialog from './components/Dialog'
import Title from './components/Title'
import Body from './components/Body'
import Letter from './components/Letter'
import LetterGrid from './components/LetterGrid'

import { startGame, showDialog } from './state/action'

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, {})

  return (
    <>
      <Title>Finde alle B</Title>
      <Body>
        {state.started &&
          <LetterGrid>
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
          </LetterGrid>
        }
        {!state.started && 
          <div onClick={() => dispatch(showDialog(<h1>HELLO</h1>))}>START!</div>
        }
        <Dialog dialogs={state.dialogs || []} dispatch={dispatch} />
      </Body>
    </>
  )
}

export default App
