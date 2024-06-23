<template>
  <div class="home">
    <!-- Hintergrundbild mit Overlay -->
    <div class="hero-container">
      <div class="overlay">
        <div class="welcome-text">
          <WelcomeText msg="Welcome to FantasyWorld: Character Generator"/>
          <p class="intro-text">
            Create epic stories in your fantasy world or print your characters and play with your friends! Dive in now and become the creator of your own fantasy worlds!
          </p>
          <a href="#" class="action-link" @click.prevent="showHowToPlay">How to Play</a>
        </div>
      </div>
    </div>

    <!-- How to Play Modal -->
    <div v-if="showHowToPlayModal" class="modal">
      <div class="modal-content how-to-play">
        <h2>Mythical Card Game: Rules</h2>
        <ol>
          <li><strong>Game Setup</strong>
            <ul>
              <li>Each player randomly draws 5 cards from a shuffled deck of character cards.</li>
              <li>Each player places their cards face down in front of them.</li>
            </ul>
          </li>
          <li><strong>Gameplay</strong>
            <ul>
              <li>The game is turn-based. In each round, each player selects one of their cards and places it face down on the table.</li>
              <li>Both players reveal their cards simultaneously and compare attributes.</li>
            </ul>
          </li>
          <li><strong>Combat Rules</strong>
            <ul>
              <li><strong>Age:</strong> The older character automatically wins against the younger one unless a weakness or skill specifies otherwise.</li>
              <li><strong>Older character:</strong> +2 points</li>
              <li><strong>Significant Skill vs. Weakness:</strong> If a character's significant skill counters the opponent's weakness, the character with the skill wins.</li>
              <li><strong>Skill counters weakness:</strong> +3 points</li>
              <li><strong>Species:</strong> Certain species have advantages or disadvantages against other species (optional, if specified).</li>
              <li><strong>Advantage against species:</strong> +1 point</li>
            </ul>
          </li>
          <li><strong>Scoring</strong>
            <ul>
              <li>The winner of a round earns points based on the above rules.</li>
              <li>The loser does not earn points for the round.</li>
              <li>If both characters in a round are equally matched, neither player earns points.</li>
            </ul>
          </li>
          <li><strong>Special Rule: Tie</strong>
            <ul>
              <li>In the event of a tie (when both characters have the same points), both players choose another card to decide the round.</li>
            </ul>
          </li>
          <li><strong>End of the Game</strong>
            <ul>
              <li>The game ends when a player has no more cards left.</li>
              <li>The player with the most points at the end of the game wins.</li>
            </ul>
          </li>
        </ol>

        <button class="open-specs-btn" @click="showDetailedSpecsModal = true">Detailed Specifications</button>
        <button class="close-btn" @click="showHowToPlayModal = false">Close</button>
      </div>
    </div>

    <!-- Detailed Specifications Modal -->
    <div v-if="showDetailedSpecsModal" class="modal">
      <div class="modal-content detailed-specs">
        <h2>Detailed Specifications</h2>
        <h3>Significant Skill vs. Weakness</h3>
        <ul>
          <li>Thunder Control: Counters: Nature Control</li>
          <li>Fire Control: Counters: Ice Magic</li>
          <li>Healing: Counters: Poison, Dark Magic</li>
          <li>Invisibility: Counters: Tracking Magic</li>
          <li>Mind Control: Counters: Time Control, Teleportation</li>
          <li>Super Strength: Counters: Super Speed, Energy Absorption</li>
        </ul>
        <h3>Species Advantages and Disadvantages</h3>
        <ul>
          <li>Vampires: Advantages: Against Elves, Disadvantages: Against Werewolves</li>
          <li>Demons: Advantages: Against Werewolves, Disadvantages: Against Angels</li>
          <li>Dragons: Advantages: Against Angels, Disadvantages: Against Giants</li>
          <li>Elves: Advantages: Against Giants, Disadvantages: Against Orcs</li>
          <li>Merfolk (Mermaids/Mermen): Advantages: Against Fairies, Disadvantages: Against Witches/Wizards</li>
          <li>Zombies: Advantages: Against Vampires, Disadvantages: Against Dragons</li>
        </ul>
        <button class="close-btn" @click="showDetailedSpecsModal = false">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeText from '@/components/WelcomeText.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeText
  },
  data () {
    return {
      showHowToPlayModal: false,
      showDetailedSpecsModal: false
    }
  },
  methods: {
    showHowToPlay () {
      this.showHowToPlayModal = true
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* overlay color and opacity */
  color: white;
  text-align: center;
  padding: 20px;
}

.welcome-text {
  margin-bottom: 20px;
}

.intro-text {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.action-link {
  color: #42b983;
  font-size: 1.2em;
  text-decoration: underline;
  margin-top: 10px;
}

.action-link:hover {
  color: #359e73;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #888888;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 800px;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  font-size: 1.8em;
  margin-top: 0;
  color: #42b983;
}

.modal-content h3 {
  font-size: 1.5em;
  margin-top: 15px;
  color: #333;
}

.modal-content p,
.modal-content ul {
  margin-top: 5px;
  line-height: 1.6;
}

.modal-content ul {
  list-style-type: none;
  padding: 0;
}

.close-btn,
.open-specs-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.close-btn:hover,
.open-specs-btn:hover {
  background-color: #359e73;
}

/* Hintergrundbild */
.hero-container {
  background-image: url('@/assets/foto.jpg');
  background-size: cover;
  background-position: center;
}
</style>
