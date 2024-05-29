<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create Character</router-link> |
      <router-link to="/view">View Characters</router-link> |
      <router-link to="/characters">My Characters</router-link>
    </nav>

    <router-view/>

    <footer>
      <p>&copy; 2024 FantasyWorld</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: #f0f0f0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

footer {
  margin-top: 20px;
}

body {
  background: radial-gradient(circle, #663399, #00CED1); /* Farbe */
}
</style>
