import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import CreateCharacter from '../views/CreateCharacter.vue'
import MyCharacters from '../views/MyCharacters.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateCharacter
    // Komponente für das Erstellen von Charakteren
  },
  {
    path: '/view',
    name: 'view',
    component: CharacterView // Verwende die CharacterView-Komponente
  },
  {
    path: '/characters',
    name: 'characters',
    component: MyCharacters // Neu hinzugefügt
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
