MyComponent = require '../app/MyCoffeeComponent'

describe MyCoffeeComponent, ->
	it 'sanity test', ->
		expect(1).toEqual 1

	it 'should do a simple import', ->
		expect(MyCoffeeComponent).toEqual 5
