<template>
  <div class="create-character">
    <div class="hero-container">
      <div class="overlay">
        <h1>Create Character</h1>
        <div class="card">
          <form @submit.prevent="createCharacter">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="character.name" class="form-control">
            </div>
            <div class="form-group">
              <label for="age">Age:</label>
              <input type="number" id="age" v-model="character.age" class="form-control">
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <select id="gender" v-model="character.gender" class="form-control">
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
                <option value="DIVERSE">Diverse</option>
              </select>
            </div>
            <div class="form-group">
              <label for="species">Species:</label>
              <select id="species" v-model="character.species" class="form-control">
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
              <label for="significantSkill">Significant Skill:</label>
              <input type="text" id="significantSkill" v-model="character.significantSkill" class="form-control">
            </div>
            <div class="form-group">
              <label for="weakness">Weakness:</label>
              <input type="text" id="weakness" v-model="character.weakness" class="form-control">
            </div>
            <div class="form-group">
              <label for="story">Story:</label>
              <textarea id="story" v-model="character.story" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Create Character</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateCharacter',
  data () {
    return {
      character: {
        name: '',
        age: 0,
        gender: '',
        species: '',
        significantSkill: '',
        weakness: '',
        story: ''
      }
    }
  },
  methods: {
    async createCharacter () {
      try {
        console.log('Creating character with data:', this.character)
        await axios.post('https://mythic-character-generator.onrender.com/characters', this.character, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.$router.push('/view')
      } catch (error) {
        console.error('Error creating character:', error)
      }
    }
  }
}
</script>

<style scoped>
.create-character {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/foto.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: left;
  padding: 20px;
}

h1 {
  align-self: flex-start;
  margin: 0 0 20px 0;
}

.card {
  color: white; /* create tabelle writing color */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 700px;
  max-height: 80vh; /* form */
  overflow-y: auto; /* Allow scrolling if content overflows */
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
}

.btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.btn-primary:hover {
  background-color: #359e73;
}
</style>
