<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create Character</router-link> |
      <router-link to="/view">View Characters</router-link>
    </nav>

    <router-view/>

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
  text-align: center;
  color: #ffffff;
}

nav {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #42b983; /* bottom line color */
}

nav a {
  font-weight: bold;
  color: #ffffff;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b983; /* green color on hover */
}

nav a.router-link-exact-active {
  color: #42b983; /* green color for active links */
}
</style>
