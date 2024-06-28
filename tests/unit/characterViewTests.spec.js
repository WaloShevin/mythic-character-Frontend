import { shallowMount } from '@vue/test-utils'
import CharacterView from '@/views/CharacterView.vue'
import axios from 'axios'

jest.mock('axios', () => ({
  get: jest.fn(),
  delete: jest.fn(),
  put: jest.fn()
}))

describe('CharacterView.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CharacterView)
  })

  afterEach(() => {
    wrapper = null
  })

  it('renders characters correctly from API', async () => {
    const charactersData = [
      { id: 1, name: 'Character 1', age: 25, gender: 'MALE', species: 'Elf', weakness: 'Sunlight', significantSkill: 'Archery', story: 'Lorem ipsum' },
      { id: 2, name: 'Character 2', age: 30, gender: 'FEMALE', species: 'Vampire', weakness: 'Garlic', significantSkill: 'Flight', story: 'Dolor sit amet' }
    ]

    axios.get.mockResolvedValue({ data: charactersData })

    await wrapper.vm.fetchCharacters()

    expect(wrapper.vm.characters).toEqual(charactersData)
  })

  it('deletes a character on deleteCharacter method', async () => {
    const characterId = 1
    const charactersData = [
      { id: 1, name: 'Character 1', age: 25, gender: 'MALE', species: 'Elf', weakness: 'Sunlight', significantSkill: 'Archery', story: 'Lorem ipsum' },
      { id: 2, name: 'Character 2', age: 30, gender: 'FEMALE', species: 'Vampire', weakness: 'Garlic', significantSkill: 'Flight', story: 'Dolor sit amet' }
    ]

    axios.delete.mockResolvedValue({})

    wrapper.setData({ characters: charactersData })
    await wrapper.vm.deleteCharacter(characterId)

    expect(wrapper.vm.characters.length).toBe(1)
    expect(wrapper.vm.characters.some(character => character.id === characterId)).toBe(false)
  })
})
