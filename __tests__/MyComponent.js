import MyComponent from '../app/MyComponent'

describe('MyComponent', () => {
	it('sanity test', () => {
		expect(1).toEqual(1)
	})

	it('should do a simple import', () => {
		expect(MyComponent.default).toEqual(5)
	})
})


