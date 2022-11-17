import { createSlice } from '@reduxjs/toolkit'
import notesService from '../services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    appendNote(state, action) {
      state.push(action.payload)
    },
    toggleImportanceOf(state, action) {
      const idToUpdate = action.payload
      const noteToUpdate = state.find((entry) => {
        return entry.id === idToUpdate
      })
      const updatedNote = {
        ...noteToUpdate,
        important: !noteToUpdate.important,
      }
      return state.map((entry) => {
        return entry.id === updatedNote.id ? updatedNote : entry
      })
    },
    setNotes(state, action) {
      return action.payload
    },
  },
})

export const { createNote, toggleImportanceOf, setNotes } = noteSlice.actions

export const initializeNotes = () => {
  return async (dispatch) => {
    const allNotes = await notesService.getNotes()
    dispatch({ type: 'notes/setNotes', payload: allNotes })
  }
}

export const createNewNote = (content) => {
  return async (dispatch) => {
    const createdNote = await notesService.createNewNote(content)
    dispatch({ type: 'notes/appendNote', payload: createdNote })
  }
}

export default noteSlice.reducer
