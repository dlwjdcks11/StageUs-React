import React from 'react';
import { NumberGame } from './component/NumberGame'
import Answer from './component/Answer'
import StartButton from './component/StartButton'
import ResetButton from './component/ResetButton'

const App = () => {
  return (
    <React.Fragment>
      <Answer/>
      <NumberGame/>
      <StartButton/>
      <ResetButton/>
    </React.Fragment>
  )
}

export default App; 