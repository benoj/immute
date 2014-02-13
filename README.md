Immute
======
[![Build Status](https://drone.io/github.com/benoj/immute/status.png)](https://drone.io/github.com/benoj/immute/latest)

Description
-----------

Immute is a simple library intended for the creation of immutable value objects. If you want to know more about what immutable value objects are and why they a good thing have, please read the following article by [Runway 7](http://hangar.runway7.net/punditry/immutability-value-objects).

Installation
------------

Immute is available from the NPM repository simply `npm install immute` or add immute as a dependency in your package.json file.

Usage
-----

Creating immutable object constructor
```javascript  
var immute = require('immute');

var Cat = immute({
        name: "required",
        birthDate: "required",
        description: "optional"
    });
```

Object properties can be required or optional
```javascript
var unknown = new Cat({birthDate: "02.03.32", description: "fat homeless cat"}); 
// ERROR: 'Required field missing from immutable object'
```

Object properties cannot be updated
```javascript
var sheldon = new Cat({name: "sheldon", birthDate: "02.04.2013"}); //valid
sheldon.name = "Leonard"; // ERROR: 'Immutable value object. Property cannot be changed'
```

Objects are closed so no additional parameters can be added
```javascript
var cuddles = new Cat({name: "cuddles", birthDate: "02.02.2012", description:"likes salmon"}); //valid
cuddles.status = "sleeping"; 

Object.keys(cuddles); // ['name','birthDate','description']
```






[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/benoj/immute/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

