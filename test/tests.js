var expect = require('chai').expect,
	_ = require('underscore'),
	immute = require('../immute');

test('When object constructor is created, Then correct properties are set',function(){
	var objectDefinition =  {name: "required", cuteness: "required"},
		Kitty = immute(objectDefinition);
	
	var immutableKitty = new Kitty({name: "sheldon",cuteness: "10"});

	expect(Object.keys(immutableKitty)).to.deep.equal(Object.keys(objectDefinition));
});

test('When object constructor is created, Then properties are set with correct values',function(){
	var objectDefinition =  {name: "required", cuteness: "required"},
		objectValues = {name: "sheldon",cuteness: "10"},
		Kitty = immute(objectDefinition);
	var immutableKitty = new Kitty(objectValues);

	expect(_.pairs(immutableKitty)).to.deep.equal(_.pairs(objectValues));
});