
import './App.css'
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import NotesFilter from './components/NotesFilter';

const App = () => {

  return (
    <div>
      <NewNote />
      <NotesFilter/>
      <Notes />
    </div>
  )
}

export default App
