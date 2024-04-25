<template>
  <div class="welcome-text">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'WelcomeText',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
