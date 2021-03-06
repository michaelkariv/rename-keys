# rename-keys [![NPM version](https://badge.fury.io/js/rename-keys.png)](http://badge.fury.io/js/rename-keys)

> Modify the names of the own enumerable properties (keys) of an object.

Bug? Feature request? [Please create an issue](https://github.com/jonschlinkert/rename-keys/issues).

## Quickstart

### [npm](npmjs.org):

```
npm i rename-keys --save
```

### [bower](https://github.com/bower/bower):

```
bower install rename-keys --save
```

## Usage

```js
var rename = require('rename-keys');
rename( object, function );
```

**Arguments**

* `object {Object}`: the object to iterate over.
* `function {Function}`: the function to use to rename each own enumerable property of `object`.

## Example

The object to iterate over:

```js
var pkg = require('./package.json');
```

and this renaming function:

```js
var addDashes = function(str) {
  return '--' + str;
};
console.log(rename(pkg, addDashes));
```
results in:

```js
{ "--name": "rename-keys",
  "--description": "Modify the names of the own enumerable properties (keys) of an object.",
  "--version": "0.1.0",
  "--homepage": "https://github.com/jonschlinkert/rename-keys",
  "--author": {
    "name": "Jon Schlinkert",
    "url": "https://github.com/jonschlinkert"
  } ... }
```

## Extension  - deep rename (suggested by Michael Kariv, 2015-01-20)

rename function now optionally receives the third boolean parameter. 
If true, the function renames nested objects' keys.

```js
var addDashes = function(str) {
  return '--' + str;
};
console.log(rename(pkg, addDashes, true));
```
results in:

```js
{ "--name": "rename-keys",
  "--description": "Modify the names of the own enumerable properties (keys) of an object.",
  "--version": "0.1.0",
  "--homepage": "https://github.com/jonschlinkert/rename-keys",
  "--author": {
    "--name": "Jon Schlinkert",
    "--url": "https://github.com/jonschlinkert"
  } ... }
```

## Authors

**Jon Schlinkert**

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](https://github.com/jonschlinkert)

## License
Copyright (c) 2014-2015, Jon Schlinkert.
Released under the MIT license