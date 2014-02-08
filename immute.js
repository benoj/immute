var _ = require('underscore');

module.exports = function(objectDefinition){
	var objectDefinitionKeys = Object.keys(objectDefinition);

	return function(options){
		var object = {};
		_.each(objectDefinitionKeys,function(key){
			object[key] = options[key];
		});
		return object;
	};
};