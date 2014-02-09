var _ = require('underscore');

module.exports = function(objectDefinition){
	var objectDefinitionKeys = Object.keys(objectDefinition),
		MISSING_REQUIRED_PROPERTY_ERROR = new Error('Required field missing from immutable object');

	return function(options){
		var object = {};
		_.each(objectDefinitionKeys,function(key){
			if(!options[key]){
				throw MISSING_REQUIRED_PROPERTY_ERROR;
			}
			object[key] = options[key];
		});
		return object;
	};
};