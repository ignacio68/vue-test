import { mount } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'
import Message from '../src/components/Message'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(MessageList, { // Creamos una copia del componente original
      propsData: { // sobreescribimos las props con 'propsData'
        messages: ['Cat']
      }
    })
  })

  it('Ambos MessageList y Message son instancias de vue', () => {
    expect(cmp.isVueInstance()).toBe(true)
    expect(cmp.find(Message).isVueInstance()).toBe(true)
  })

  it('has recived ["Cat"] as the message property', () => {
    // Dentro de cmp.vm, podemos acceder a todas las instancias de metodos de Vue
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  it('is a MessageList component', () => {
    expect(cmp.is('ul')).toBe(true)
  })

  it('contains a Message component', () => {
    expect(cmp.contains('.message')).toBe(true)
  })

  it('el elemento Message existe', () => {
    expect(cmp.find('.message').exists()).toBe(true)
  })

  it('Message no está vacio', () => {
    expect(cmp.find(Message).isEmpty()).toBe(false)
  })

  it('Message tiene un atributo de clase ".message"', () => {
    expect(cmp.find(Message).classes()).toContain('message')
  })

  // it('Message tiene el style margin-top: 10', () => {
  //   expect(cmp.find(Message).hasStyle('margin-top', '10')).toBe(true)
  //})
})
