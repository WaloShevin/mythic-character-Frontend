<template>
  <div class="create-character">
    <h1>Create Character</h1>
    <form @submit.prevent="createCharacter">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="character.name" class="form-control">
      </div>
      <div class="form-group">
        <label for="race">Race:</label>
        <select id="race" v-model="character.race" class="form-control">
          <option value="human">Human</option>
          <option value="elf">Elf</option>
          <option value="dwarf">Dwarf</option>
        </select>
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="character.age" class="form-control">
      </div>
      <div class="form-group">
        <label for="strength">Strength:</label>
        <input type="number" id="strength" v-model="character.strength" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Create Character</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateCharacter',
  data () {
    return {
      character: {
        name: '',
        race: '',
        age: 0,
        strength: 0
      }
    }
  },
  methods: {
    createCharacter () {
      console.log('Neuer Charakter erstellt:', this.character)
    }
  }
}
</script>

<style scoped>
.create-character {
  background-image: url('../assets/foto.jpg'); /* Bild als Hintergrund */
  background-size: cover; /* Bild skaliert, um den gesamten Hintergrund abzudecken */
  background-position: center; /* Bildpositionierung zentrieren */
  background-repeat: no-repeat; /* Bildwiederholung verhindern */
  min-height: 100vh; /* Mindesthöhe auf die Höhe des Bildschirms setzen */
  display: flex; /* Flexbox verwenden, um Inhalte zu zentrieren */
  justify-content: center; /* Horizontal zentrieren */
  align-items: center; /* Vertikal zentrieren */
}

.create-character form {
  max-width: 400px;
  margin: 0 auto;
  background-color: #f0f0f0; /* Hintergrundfarbe für die Box */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Glitzereffekt */
}

.form-group {
  margin-bottom: 20px;
}
</style>
