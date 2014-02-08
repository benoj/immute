var expect = require('chai').expect,
	immute = require('../immute');

test('When object constructor is created, Then correct properties are set',function(){
	var objectDefinition =  {name: "required", cuteness: "required"},
		Kitty = immute(objectDefinition);
	
	var immutableKitty = new Kitty({name: "sheldon",cuteness: "10"});

	expect(Object.keys(immutableKitty)).to.deep.equal(Object.keys(objectDefinition));
});