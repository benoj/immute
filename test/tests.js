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

test('When object is created without required parameter, Then exception thrown',function(){
	var objectDefinition = {name: "required", cuteness: "required"};
		Kitty = immute(objectDefinition);

	expect(function(){
		new Kitty({name: "Wayne"});
	}).to.throw('Required field missing from immutable object');
});

test('When constructor is created with optional parameter and object does not define it, Then no exception thrown',function(){
	var objectDefinition = {name: "required", cuteness: "required", fluffyness: "optional"};
		Kitty = immute(objectDefinition);

	expect(function(){
		new Kitty({name: "Wayne", cuteness:"10"});
	}).to.not.throw('Required field missing from immutable object');
});


test('When constructor is created with optional parameter and object does not define it, Then created object does not have the optional key',function(){
	var objectDefinition = {name: "required", cuteness: "required", fluffyness: "optional"};
		Kitty = immute(objectDefinition);
		var immutableKitty = new Kitty({name: "Wayne", cuteness:"10"});
		expect(Object.keys(immutableKitty)).to.not.include("fluffyness");
});

test('When object is created and a property is updated, Then exception is thrown',function(){
	var objectDefinition =  {name: "required", cuteness: "required"},
		Kitty = immute(objectDefinition);
	
	var immutableKitty = new Kitty({name: "sheldon",cuteness: "10"});
	expect(function(){
		immutableKitty.cuteness = "9";
	}).to.throw('Immutable value object. Property cannot be changed');
});

test('When object is created and a property is updated, Then exception is thrown',function(){
	var objectDefinition =  {name: "required", cuteness: "required"},
		Kitty = immute(objectDefinition);
	
	var immutableKitty = new Kitty({name: "sheldon",cuteness: "10"});
	immutableKitty.bob = "asdasd";
	expect(Object.keys(immutableKitty)).to.not.include("bob");
});