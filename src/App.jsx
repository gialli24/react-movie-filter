import './App.css'
import AppMain from './components/AppMain'
import { films } from './assets/js/data'

function App() {

  return (
    <>
      <AppMain films={films} />
    </>
  )
}

export default App
