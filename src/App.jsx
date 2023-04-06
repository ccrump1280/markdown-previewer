import './App.scss'
import Editor from './App/Editor'
import Previewer from './App/Previewer'
import { useState } from 'react'

function App() {
  const [HTML, setHTML] = useState();
  return (
    <div className="App">
      <Editor setHTML={setHTML} />
      <Previewer HTML={HTML} />
    </div>
  )
}

export default App