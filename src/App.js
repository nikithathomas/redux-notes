import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './App.css'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import NotesFilter from './components/NotesFilter'
import { initializeNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch])
  return (
    <div>
      <NewNote />
      <NotesFilter />
      <Notes />
    </div>
  )
}

export default App
