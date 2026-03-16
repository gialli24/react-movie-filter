import './App.css'
import AppMain from './components/AppMain'
import { movies } from './assets/js/data'

function App() {

  return (
    <>
      <AppMain movies={movies} />
    </>
  )
}

export default App
