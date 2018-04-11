import { mount } from '@vue/test-utils'
import Message from '../src/components/Message'

const CREATECMP = propsData => mount(Message, { propsData })

describe('Message.test.js', () => {
	let cmp 

	describe('Properties', () => {
		it('Tiene una property "message"', () => {
			cmp = CREATECMP({ message: 'hey' })
			expect(cmp.props('message', 'hey')).toBeTruthy()
		})

		it('No tiene la proprty "cat"', () => {
			cmp = CREATECMP({ cat: 'hey' })
			expect(cmp.props('cat', 'hey')).toBeTruthy()
		})

		it('Paco es el autor por defecto', () => {
			cmp = CREATECMP({ message: 'hey'})
			expect(cmp.props('author', 'Paco')).toBeTruthy()
		})

		describe('Validation', () => {
			const MESSAGE = CREATECMP().vm.$options.props.message

			it('message es del tipo String', () => {
				expect(MESSAGE.type).toBe(String)
			})

			it('message es required', () => {
				expect(MESSAGE.required).toBeTruthy()
			})

			it('message tiene al menos longitud 2', () => {
				expect(MESSAGE.validator && MESSAGE.validator('a')).toBeFalsy()
				expect(MESSAGE.validator && MESSAGE.validator('aa')).toBeTruthy()
			})
		})
	})

	describe('Events', () => {
		beforeEach(() => {
			cmp= CREATECMP({ message: 'Cat' })
		})

		it('llama a handleClick cuando hace click en message', () => {
			const stub = jest.fn()
			cmp.setMethods({ handleClick: stub })

			const el = cmp.find('.message').trigger('click')
			expect(stub).toBeCalled()
		})
	})
})