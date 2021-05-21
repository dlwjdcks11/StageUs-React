import React from 'react';
import { NumberGame } from './component/NumberGame'
import Answer from './component/Answer'
import GameStateButton from './component/GameStateButton'

const App = () => {
  return (
    <React.Fragment>
      <Answer/>
      <NumberGame/>
      <GameStateButton/>
    </React.Fragment>
  )
}

export default App; 