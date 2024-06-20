<template>
  <div class="character-view">
    <h1>View Characters</h1>
    <div v-for="character in characters" :key="character.id" class="character-card">
      <h2>{{ character.name }}</h2>
      <div class="character-info">
        <p><strong>Gender:</strong> {{ character.gender }}</p>
        <p><strong>Weakness:</strong> {{ character.weakness }}</p>
        <p><strong>Significant Skill:</strong> {{ character.significantSkill }}</p>
        <p><strong>Age:</strong> {{ character.age }} years old</p>
        <p><strong>Species:</strong> {{ character.species }}</p>
      </div>
      <button @click="deleteCharacter(character.id)" class="delete-button">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharacterView',
  data () {
    return {
      characters: []
    }
  },
  methods: {
    async fetchCharacters () {
      try {
        const response = await axios.get('https://mythic-character-generator.onrender.com/characters')
        console.log('API Response:', response.data) // Überprüfe die API-Antwort
        this.characters = response.data
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    },
    async deleteCharacter (id) {
      try {
        await axios.delete(`https://mythic-character-generator.onrender.com/characters/${id}`)
        this.characters = this.characters.filter(character => character.id !== id)
      } catch (error) {
        console.error('Error deleting character:', error)
      }
    }
  },
  async mounted () {
    await this.fetchCharacters()
  }
}
</script>

<style scoped>
.character-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.character-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  background-color: #fff;
}

.character-card h2 {
  margin-top: 0;
  font-size: 24px;
  color: #333;
}

.character-info p {
  margin: 5px 0;
  font-size: 16px;
}

.delete-button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #ff7875;
}
</style>
