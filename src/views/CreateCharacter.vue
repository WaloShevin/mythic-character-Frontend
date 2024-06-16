<template>
  <div class="create-character">
    <h1>Create Character</h1>
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
        <input type="text" id="gender" v-model="character.gender" class="form-control">
      </div>
      <div class="form-group">
        <label for="species">Species:</label>
        <input type="text" id="species" v-model="character.species" class="form-control">
      </div>
      <div class="form-group">
        <label for="significantSkill">Significant Skill:</label>
        <input type="text" id="significantSkill" v-model="character.significantSkill" class="form-control">
      </div>
      <div class="form-group">
        <label for="weakness">Weakness:</label>
        <input type="text" id="weakness" v-model="character.weakness" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Create Character</button>
    </form>
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
        weakness: ''
      }
    }
  },
  methods: {
    async createCharacter () {
      try {
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
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px;
}
</style>
