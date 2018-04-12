// jest.mock('axios', () => ({
//  get: jest.fn(() => Promise.resolve({ 3 }))
// }))

import { shallow } from '@vue/test-utils'
import Form from '../src/components/Form'
import axios from 'axios'

describe('Form.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Form)
    jest.resetModules()
    jest.clearAllMocks()
  })

/*  describe('Methods', () => {
    it('llama a axios.get y chequea el resultado de la promesa', async() => {
      const result = await cmp.vm.onSubmit('an')

      expect(result).toEqual({ data: [3] })
      expect(cmp.vm.results).toEqual([3])
      expect(axios.get).toBeCalledWith('https://jsonplaceholder.typecode.com/post?q=an')
    }) 

    // it('axios no debería ser llamado aquí', () => {
    //   expect(axios.get).toBeCalledWith('https://jsonplaceholder.typecode.com/post?q=an')
    // })
  }) */

  describe('Properties', () => {
    it('devuelve el string en orden normal si la property reversed no es cierta', () => {
      cmp.vm.inputValue = 'Yoo'
      expect(cmp.vm.reversedInput).toBe('Yoo')
    })

    it('devuelve el estring inverso si la reversed property es cierta', () => {
      cmp.vm.inputValue = 'Yoo'
      cmp.setProps({ reversed: true })
      expect(cmp.vm.reversedInput).toBe('ooY')
    })
  })

  describe('Watchers -inputValue', () => {
    let spy

    beforeAll(() => {
      spy = jest.spyOn(console, 'log')
    })

    afterEach(() => {
      spy.mockClear()
    })

    it('no es llamado si el valor está vacio (trimmed)', next => {
      cmp.vm.inputValue = ''

      cmp.vm.$nextTick(() => {
        expect(spy).not.toBeCalled()
        next()
      })
    })

    it('no es llamado si los valores son los mismos', next => {
      cmp = shallow(Form, {data: ({ inputValue: 'foo' }) })
      cmp.vm.inputValue = 'foo'

      cmp.vm.$nextTick(() => {
        spy.mockClear()
        cmp.vm.inputValue = 'foo'
      })

      cmp.vm.$nextTick(() => {
        expect(spy).not.toBeCalled()
        next()
      })
    })

    it('es llamado con el nuevo valor en otros casos', next => {
      cmp.vm.inputValue = 'foo'

      cmp.vm.$nextTick(() => {
        expect(spy).toBeCalled()
        next()
      })
    })
  })
})
