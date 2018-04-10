import { shallow } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
  cmp = shallow(MessageList, { // Creamos una copia del componente original
    propsData: {
      messages: ['Cat']
    }
  })
})

it('has recived ["Cat"] as the message property', () => {
  // Dentro de cmp.vm, podemos acceder a todas las instancias de metodos de Vue
  expect(cmp.vm.messages).toEqual(['Cat'])
})

it('has the expected html structure', () => {
  expect(cmp.element).toMatchSnapshot()
})
})
