<template>
  <div>
    <h3>Characters</h3>
    <div v-if="characters.length === 0">
      No characters yet
    </div>
    <div v-else>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Power</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="character in characters" :key="character.name">
          <td>{{ character.name }}</td>
          <td>{{ character.power }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// eslint-disable-next-line no-undef
defineProps({
  title: String
})

const characters = ref([])

async function loadCharacters () {
  try {
    const response = await axios.get('http://localhost:8080/api/')
    characters.value = response.data
  } catch (error) {
    console.error('Error fetching characters:', error)
  }
}

onMounted(loadCharacters)
</script>

<style scoped>
h3 {
  text-align: center;
}
table {
  margin-left: auto;
  margin-right: auto;
}
</style>
