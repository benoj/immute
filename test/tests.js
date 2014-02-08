var expect = require('chai').expect,
	immute = require('../immute');

test('hello',function(){
	var objectDefinition =  {name: "required", cuteness: "required"},
		Kitty = immute(objectDefinition);
	
	var immutableKitty = new Kitty("Sheldon","10");

	expect(Object.keys(immutableKitty)).to.deep.equal(Object.keys(objectDefinition));
});