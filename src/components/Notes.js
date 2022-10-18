import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ clickHandler, note }) => {
  return (
    <li onClick={() => clickHandler(note.id)}>
      {note.content}
      <strong>{note.important ? 'important' : ''}</strong>
    </li>
  )
}
const Notes = () => {
  const notes = useSelector(({filter,notes}) => {
    const originalNotes = notes
    if (filter === 'ALL') {
      return originalNotes
    }
    return filter === 'IMPORTANT'
      ? originalNotes.filter((note) => note.important)
      : originalNotes.filter((note) => !note.important)
  })
  const dispatch = useDispatch()

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }
  return (
    <ul>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            clickHandler={toggleImportance}
            note={note}
          ></Note>
        )
      })}
    </ul>
  )
}

export default Notes
