import { shallow } from '@vue/test-utils'
import App from '../src/App'

describe('App.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(App, { // Creamos una copia del componente original
      data: {
        messages: ['Cat']
      }
    })
  })

  it('equals messages to ["Cat"]', () => {
    // Dentro de cmp.vm, podemos acceder a todas las instancias de metodos de Vue
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
