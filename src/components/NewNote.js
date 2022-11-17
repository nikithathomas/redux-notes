import { useDispatch } from 'react-redux'
import { createNewNote } from '../reducers/noteReducer'

const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    dispatch(createNewNote(content));
    event.target.note.value = ''
  }
  return (
    <form onSubmit={addNote}>
      <input type="text" name="note" />
      <button type="submit">Add Note</button>
    </form>
  )
}

export default NewNote
