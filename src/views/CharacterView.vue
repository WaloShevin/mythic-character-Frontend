<template>
  <div class="character-view">
    <h1>View Characters</h1>
    <div v-for="character in characters" :key="character.id" class="character-card">
      <div>{{ character.name }}</div>
      <div>{{ character.gender }}</div>
      <div>{{ character.weakness }}</div>
      <div>{{ character.significantSkill }}</div>
      <div>{{ character.age }} years old</div>
      <div>Strength: {{ character.species }}</div>
      <button @click="deleteCharacter(character.id)">Delete</button>
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
.character-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}
</style>
