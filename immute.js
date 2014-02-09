var _ = require('underscore');

module.exports = function(objectDefinition){
	var objectDefinitionKeys = Object.keys(objectDefinition),
		MISSING_REQUIRED_PROPERTY_ERROR = new Error('Required field missing from immutable object'),
		UPDATING_PROPERTY_ERROR = new Error('Immutable value object. Property cannot be changed');;

	return function(options){
		var object = {};
		_.each(objectDefinitionKeys,function(key){
			if(!options[key] && objectDefinition[key] === "required"){
				throw MISSING_REQUIRED_PROPERTY_ERROR;
			}
			if(options[key]){
				object.__defineGetter__(key,function(){
					return options[key];
				});

				object.__defineSetter__(key,function(){
					throw UPDATING_PROPERTY_ERROR;
				});
			}
			

		});
		return object;
	};
};