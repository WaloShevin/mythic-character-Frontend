<template>
  <div class="character-view">
    <h1>View Characters</h1>
    <div>
      <input v-model="searchName" placeholder="Search by name" />
      <button @click="searchCharactersByName">Search by Name</button>
      <input v-model="searchWeakness" placeholder="Search by weakness" />
      <button @click="searchCharactersByWeakness">Search by Weakness</button>
      <select v-model="sortOrder">
        <option value="asc">Oldest to Youngest</option>
        <option value="desc">Youngest to Oldest</option>
      </select>
      <button @click="sortCharacters">Sort</button>
    </div>
    <div v-for="character in characters" :key="character.id" class="character-card">
      <h2>{{ character.name }}</h2>
      <div class="character-info">
        <p><strong>Gender:</strong> {{ character.gender }}</p>
        <p><strong>Weakness:</strong> {{ character.weakness }}</p>
        <p><strong>Significant Skill:</strong> {{ character.significantSkill }}</p>
        <p><strong>Age:</strong> {{ character.age }} years old</p>
        <p><strong>Species:</strong> {{ character.species }}</p>
        <p><strong>Story:</strong> {{ character.story }}</p>
      </div>
      <button @click="editCharacter(character)" class="edit-button">Edit</button>
      <button @click="deleteCharacter(character.id)" class="delete-button">Delete</button>
    </div>
    <div v-if="editMode">
      <h2>Edit Character</h2>
      <form @submit.prevent="updateCharacter">
        <div class="form-group">
          <label for="editName">Name:</label>
          <input type="text" id="editName" v-model="editedCharacter.name" class="form-control">
        </div>
        <div class="form-group">
          <label for="editAge">Age:</label>
          <input type="number" id="editAge" v-model="editedCharacter.age" class="form-control">
        </div>
        <div class="form-group">
          <label for="editGender">Gender:</label>
          <select id="editGender" v-model="editedCharacter.gender" class="form-control">
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
            <option value="DIVERSE">Diverse</option>
          </select>
        </div>
        <div class="form-group">
          <label for="editSpecies">Species:</label>
          <input type="text" id="editSpecies" v-model="editedCharacter.species" class="form-control">
        </div>
        <div class="form-group">
          <label for="editSignificantSkill">Significant Skill:</label>
          <input type="text" id="editSignificantSkill" v-model="editedCharacter.significantSkill" class="form-control">
        </div>
        <div class="form-group">
          <label for="editWeakness">Weakness:</label>
          <input type="text" id="editWeakness" v-model="editedCharacter.weakness" class="form-control">
        </div>
        <div class="form-group">
          <label for="editStory">Story:</label>
          <textarea id="editStory" v-model="editedCharacter.story" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Update Character</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharacterView',
  data () {
    return {
      characters: [],
      searchName: '',
      searchWeakness: '',
      sortOrder: 'asc',
      editMode: false,
      editedCharacter: {}
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
    },
    async searchCharactersByName () {
      try {
        const response = await axios.get(`https://mythic-character-generator.onrender.com/characters/searchByName?name=${this.searchName}`)
        this.characters = response.data
      } catch (error) {
        console.error('Error searching characters by name:', error)
      }
    },
    async searchCharactersByWeakness () {
      try {
        const response = await axios.get(`https://mythic-character-generator.onrender.com/characters/searchByWeakness?weakness=${this.searchWeakness}`)
        this.characters = response.data
      } catch (error) {
        console.error('Error searching characters by weakness:', error)
      }
    },
    async sortCharacters () {
      try {
        const response = await axios.get(`https://mythic-character-generator.onrender.com/characters/sort?sortOrder=${this.sortOrder}`)
        this.characters = response.data
      } catch (error) {
        console.error('Error sorting characters:', error)
      }
    },
    editCharacter (character) {
      this.editMode = true
      this.editedCharacter = { ...character }
    },
    async updateCharacter () {
      try {
        await axios.put(`https://mythic-character-generator.onrender.com/characters/${this.editedCharacter.id}`, this.editedCharacter, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.editMode = false
        this.fetchCharacters()
      } catch (error) {
        console.error('Error updating character:', error)
      }
    }
  },
  mounted () {
    this.fetchCharacters()
  }
}
</script>

<style scoped>
/* CSS styles remain unchanged */
</style>
