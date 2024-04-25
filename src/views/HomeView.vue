<template>
  <div class="home">
    <WelcomeText msg="Welcome to FantasyWorld: Character Generator"/>
    <img alt="Vue logo" src="../assets/foto.jpg">
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeText from '@/components/WelcomeText.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeText
  }
}
</script>
