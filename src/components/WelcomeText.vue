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
.welcome-text {
  margin-bottom: 40px;
}

.welcome-text h1 {
  font-size: 3em;
  color: #42b983;
}
</style>
