import axios from 'axios'

const API_URL = "https://zztvprtbhdmazafbgync.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dHZwcnRiaGRtYXphZmJneW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYyMTcsImV4cCI6MjA5NzIxMjIxN30.n2TMAs-aYOoDxQbOetHClJhbpNrsyHM_yRvhS6rpTFw"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

        async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },

    async loginUser(tableName, email, password) {
        const url = `https://zztvprtbhdmazafbgync.supabase.co/rest/v1/user?email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}`
        const response = await axios.get(url, { headers })
        return response.data // Menghasilkan array data user jika ditemukan
    }
}