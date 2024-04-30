// Importieren Sie @vue/test-utils und die WelcomeText-Komponente
import { shallowMount } from '@vue/test-utils'
import WelcomeText from '@/components/WelcomeText.vue'

// Beschreiben Sie Ihre Testsuite
describe('WelcomeText.vue', () => {
  // Testfall: Überprüfen, ob die Begrüßungsnachricht korrekt gerendert wird
  it('renders props.msg when passed', () => {
    // Die Nachricht, die gerendert werden soll
    const msg = 'Welcome to FantasyWorld'

    // Mounten der WelcomeText-Komponente mit der Nachricht als Eigenschaft
    const wrapper = shallowMount(WelcomeText, {
      props: { msg }
    })

    // Überprüfen, ob die Nachricht korrekt gerendert wird
    expect(wrapper.text()).toMatch(msg)
  })
})
