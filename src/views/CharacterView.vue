<template>
  <div class="character-view">
    <h1>View Characters</h1>
    <div v-for="character in characters" :key="character.id" class="character-card" :style="{ backgroundColor: characterColor(character.race) }">
      <div class="card-header">
        <h2>{{ character.name }}</h2>
        <div class="race-icon" :class="character.race"></div>
      </div>
      <div class="card-body">
        <div class="info">
          <div class="icon age-icon"></div>
          <p>{{ character.age }} years old</p>
        </div>
        <div class="info">
          <div class="icon strength-icon"></div>
          <p>Strength: {{ character.strength }}</p>
        </div>
      </div>
      <div class="card-footer">
        <button @click="showStoryModal(character)">View Story</button>
        <button @click="createStoryModal(character)">Create Story</button>
      </div>
    </div>
    <div v-if="selectedCharacter" class="story-modal">
      <div class="modal-content">
        <span class="close" @click="closeStoryModal">&times;</span>
        <h2>{{ selectedCharacter.name }}'s Story</h2>
        <textarea v-model="selectedCharacterStory" rows="6" cols="50" placeholder="Write the story here..."></textarea>
        <div class="button-container">
          <button @click="saveStory">Save</button>
          <button @click="saveAndPublishStory">Save & Publish</button>
          <button @click="cancelStory">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterView',
  data () {
    return {
      characters: [
        { id: 1, name: 'Character 1', race: 'Human', age: 30, strength: 10, story: '' },
        { id: 2, name: 'Character 2', race: 'Elf', age: 200, strength: 8, story: '' },
        { id: 3, name: 'Character 3', race: 'Dwarf', age: 50, strength: 12, story: '' }
      ],
      selectedCharacter: null,
      selectedCharacterStory: '',
      showSaveDeleteButtons: false
    }
  },
  methods: {
    showStoryModal (character) {
      this.selectedCharacter = character
      this.selectedCharacterStory = character.story || ''
      this.showSaveDeleteButtons = false
    },
    createStoryModal (character) {
      this.selectedCharacter = character
      this.selectedCharacterStory = ''
      this.showSaveDeleteButtons = true
    },
    closeStoryModal () {
      this.selectedCharacter = null
      this.selectedCharacterStory = ''
      this.showSaveDeleteButtons = false
    },
    saveStory () {
      if (this.selectedCharacter) {
        this.selectedCharacter.story = this.selectedCharacterStory
        this.closeStoryModal()
      }
    },
    saveAndPublishStory () {
      // Implement save and publish logic here
      if (this.selectedCharacter) {
        this.selectedCharacter.story = this.selectedCharacterStory
        this.closeStoryModal()
      }
    },
    cancelStory () {
      this.closeStoryModal()
    },
    characterColor (race) {
      switch (race) {
        case 'Human':
          return '#ffb6c1' // Pink für Menschen
        case 'Elf':
          return '#87ceeb' // Sky Blue für Elfen
        case 'Dwarf':
          return '#ffd700' // Gold für Zwerge
        default:
          return '#f0f0f0' // Standardfarbe
      }
    }
  }
}
</script>

<style scoped>
.character-view {
  background-image: url('../assets/foto.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
.character-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.character-card {
  margin: 10px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.character-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.race-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-size: cover;
}

.card-body {
  padding: 20px;
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  width: 20px;
  height: 20px;
  background-size: cover;
  margin-right: 10px;
}

.age-icon {
  background-image: url('https://image.flaticon.com/icons/png/512/206/206644.png');
}

.strength-icon {
  background-image: url('https://image.flaticon.com/icons/png/512/2204/2204941.png');
}

.card-footer {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
}

.close {
  float: right;
  cursor: pointer;
}

.story-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
}

.modal-content textarea {
  width: 100%;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.button-container button {
  padding: 10px 20px;
  cursor: pointer;
}

</style>
