<template>
  <div class="character-view">
    <div class="hero-container">
      <div class="overlay">
        <h1>View Characters</h1>
        <div class="search-controls">
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
        <div class="cards-container">
          <div v-for="character in characters" :key="character.id" class="character-card">
            <div class="card">
              <div class="card-header">
                <h2>{{ character.name }}</h2>
              </div>
              <div class="card-body">
                <img :src="getCharacterImage(character.species)" alt="Character Image" class="character-image">
                <div class="character-info">
                  <p><strong>Gender:</strong> {{ character.gender }}</p>
                  <p><strong>Weakness:</strong> {{ character.weakness }}</p>
                  <p><strong>Significant Skill:</strong> {{ character.significantSkill }}</p>
                  <p><strong>Age:</strong> {{ character.age }} years old</p>
                  <p><strong>Species:</strong> {{ character.species }}</p>
                  <!-- Read Story Button -->
                  <p style="cursor: pointer; text-decoration: underline; color: #007bff;" @click="openStoryModal(character.story)">Read Story</p>
                </div>
              </div>
              <div class="card-buttons">
                <button @click="editCharacter(character)" class="edit-button">Edit</button>
                <button @click="deleteCharacter(character.id)" class="delete-button">Delete</button>
                <button class="print-button">Print</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal Popup for Story -->
        <div v-if="showStoryModal" class="modal">
          <div class="modal-content">
            <span @click="closeStoryModal" class="close">&times;</span>
            <p>{{ currentStory }}</p>
          </div>
        </div>
        <div v-if="editMode" class="edit-container">
          <h2>Edit Character</h2>
          <form @submit.prevent="updateCharacter" class="edit-form">
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
              <select id="editSpecies" v-model="editedCharacter.species" class="form-control">
                <option value=""></option>
                <option value="Fairy">Fairy</option>
                <option value="Zombie">Zombie</option>
                <option value="Witch/Wizard">Witch/Wizard</option>
                <option value="Merfolk">Merfolk (Mermaids/Mermen)</option>
                <option value="Vampire">Vampire</option>
                <option value="Warewolf">Warewolf</option>
                <option value="Demon">Demon</option>
                <option value="Angel">Angel</option>
                <option value="Dragon">Dragon</option>
                <option value="Giant">Giant</option>
                <option value="Orc">Orc</option>
                <option value="Elf">Elf</option>
              </select>
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
      editedCharacter: {},
      showStoryModal: false,
      currentStory: ''
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
    // Methoden für das Story popup
    openStoryModal (story) {
      this.currentStory = story
      this.showStoryModal = true
    },
    closeStoryModal () {
      this.showStoryModal = false
    },
    // Methode zur Rückgabe des Bildpfads basierend auf der Spezies
    getCharacterImage (species) {
      let imagePath
      if (species.toLowerCase() === 'warewolf') {
        imagePath = require('@/assets/Warewolf.webp')
      } else if (species.toLowerCase() === 'vampire') {
        imagePath = require('@/assets/vampire.webp')
      } else if (species.toLowerCase() === 'demon') {
        imagePath = require('@/assets/demon.webp')
      } else if (species.toLowerCase() === 'angel') {
        imagePath = require('@/assets/angel.webp')
      } else if (species.toLowerCase() === 'elf') {
        imagePath = require('@/assets/elf.webp')
      } else if (species.toLowerCase() === 'fairy') {
        imagePath = require('@/assets/fairy.webp')
      } else if (species.toLowerCase() === 'giant') {
        imagePath = require('@/assets/giant.webp')
      } else if (species.toLowerCase() === 'orc') {
        imagePath = require('@/assets/orc.webp')
      } else if (species.toLowerCase() === 'zombie') {
        imagePath = require('@/assets/Zombie.webp')
      } else if (species.toLowerCase() === 'witch/wizard') {
        imagePath = require('@/assets/witch.webp')
      } else if (species.toLowerCase() === 'merfolk') {
        imagePath = require('@/assets/merfolk.webp')
      } else if (species.toLowerCase() === 'dragon') {
        imagePath = require('@/assets/dragon.webp')
      } else {
        imagePath = require('@/assets/foto.jpg')
      }
      return imagePath
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
.character-view {
  text-align: center;
  overflow-y: auto;
  height: 100vh;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/foto.jpg'); /* background image */
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  text-align: center;
  overflow-y: auto;
}

.search-controls {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  padding: 10px;
}

.character-card {
  width: 375px;
  border: 2px solid #fff;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.2s;
  position: relative;
  min-height: 600px; /* cards size */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.character-card:hover {
  transform: scale(1.05);
}

.card-header {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  color: #fff;
}

.card-header h2 {
  margin: 0;
  font-family: 'Cinzel', serif;
  font-size: 1.5em;
}

.character-image {
  display: block;
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 10px auto;
  border-radius: 10px;
}

.card-body {
  padding: 10px;
  color: #42b983; /* card text color */
}

.character-info {
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
}

.character-info p {
  margin: 5px 0;
}

.card-buttons {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.edit-button,
.delete-button,
.print-button {
  flex: 1;
  margin: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #42b983;
  border: 2px solid #42b983;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.edit-button:hover,
.delete-button:hover,
.print-button:hover {
  background: #fff;
  color: #000;
}

.print-button {
  background-color: #ffffff;
}

.print-button:hover {
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.7);
}

.edit-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
}

.edit-form .form-group {
  margin-bottom: 15px;
}

.edit-form label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

.edit-form input,
.edit-form select,
.edit-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

.edit-form button {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
}

.edit-form button:hover {
  background-color: #359e73;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.modal-content {
  background-color: #888888;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>
