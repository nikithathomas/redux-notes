import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]

const generateId = () => {
  return Number((Math.random() * 1000000).toFixed(0))
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: generateId(),
        important: false,
      })
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
  },
})

export const { createNote, toggleImportanceOf } = noteSlice.actions
export default noteSlice.reducer
