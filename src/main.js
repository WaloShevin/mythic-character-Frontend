import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

const app = createApp(App)

const BASE_URL = 'http://localhost:8080/api'

async function fetchCharacters () {
  try {
    const response = await fetch(`${BASE_URL}/characters`)
    if (!response.ok) {
      throw new Error('Failed to fetch characters')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching characters:', error)
    return [] // Return an empty array in case of error
  }
}

app.config.globalProperties.$fetchCharacters = fetchCharacters

createApp(App).use(router).mount('#app')
