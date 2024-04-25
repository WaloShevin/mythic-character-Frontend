<template>
  <!-- MyCharacters.vue -->
  <div class="my-characters" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <h1>My Characters</h1>
    <div v-for="character in characters" :key="character.id" class="character-card">
      <div>{{ character.name }}</div>
      <div>{{ character.race }}</div>
      <!-- Buttons für Bearbeiten, Löschen, Story erstellen und Story anzeigen -->
      <button @click="editCharacter(character)">Edit</button>
      <button @click="deleteCharacter(character)">Delete</button>
      <button @click="createStory(character)">Create Story</button>
      <button @click="viewStory(character)">View Story</button>
    </div>

    <!-- Modal für das Bearbeiten eines Charakters -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showEditModal = false">&times;</span>
        <h2>Edit Character</h2>
        <input type="text" v-model="editedCharacterName" placeholder="Enter new name">
        <button @click="saveEditedCharacter">Save</button>
      </div>
    </div>

    <!-- Modal für das Erstellen einer Geschichte -->
    <div v-if="showCreateStoryModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showCreateStoryModal = false">&times;</span>
        <h2>Create Story</h2>
        <textarea v-model="newStoryText" placeholder="Enter story text"></textarea>
        <button @click="saveNewStory">Save</button>
      </div>
    </div>

    <!-- Modal für das Anzeigen einer Geschichte -->
    <div v-if="showViewStoryModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showViewStoryModal = false">&times;</span>
        <h2>View Story</h2>
        <p>{{ selectedCharacter.story }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCharacters',
  data () {
    return {
      characters: [
        { id: 1, name: 'Character 1', race: 'Human', story: 'Lorem ipsum dolor sit amet.' },
        { id: 2, name: 'Character 2', race: 'Elf', story: 'Lorem ipsum dolor sit amet.' },
        { id: 3, name: 'Character 3', race: 'Dwarf', story: 'Lorem ipsum dolor sit amet.' }
      ],
      backgroundImage: require('@/assets/foto.jpg'),
      showEditModal: false,
      editedCharacterName: '',
      editedCharacterIndex: -1,
      showCreateStoryModal: false,
      newStoryText: '',
      showViewStoryModal: false,
      selectedCharacter: null
    }
  },
  methods: {
    editCharacter (character) {
      this.editedCharacterName = character.name
      this.editedCharacterIndex = this.characters.indexOf(character)
      this.showEditModal = true
    },
    saveEditedCharacter () {
      if (this.editedCharacterIndex !== -1) {
        this.characters[this.editedCharacterIndex].name = this.editedCharacterName
        this.showEditModal = false
      }
    },
    deleteCharacter (character) {
      const index = this.characters.indexOf(character)
      if (index !== -1) {
        this.characters.splice(index, 1)
      }
    },
    createStory () {
      this.showCreateStoryModal = true
    },
    saveNewStory () {
      this.showCreateStoryModal = false
    },
    viewStory (character) {
      this.selectedCharacter = character
      this.showViewStoryModal = true
    }
  }
}
</script>

<style scoped>

.my-characters {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.character-card {
  background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
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

textarea {
  width: 100%;
  height: 150px;
}
</style>
