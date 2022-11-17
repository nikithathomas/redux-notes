import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'
const getNotes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNewNote = async (content) => {
  const newNote = { content, important: false }
  const response = await axios.post(baseUrl, newNote)
  return response.data
}
export default { getNotes, createNewNote }
