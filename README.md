# `sfmt` - an improved util.format

`sfmt` is a module that provides an updated and improved version of util.format for string formatting.

## Installation

`npm install sfmt`

## Usage

`sfmt` takes a format string, plus values to substitute, just like util.format does. There are three different substitutions you can include in a format string.

### Positional

This is just like util.format/printf/etc. Use `%x` (where `x` is a format specifier, see below) and the next parameter in the list will be substituted.

Examples:
```javascript
var assert = require('assert');
var sfmt = require('sfmt');

assert.equal(sfmt('This %s has %d feet', 'duck', 2),
    'This duck has 2 feet');
```

### Indexed

This substitution lets you specify the index of the parameter to substitute. This is particularly useful when you need to use the same substitution in multiple places in the string, or when you have localizable text where the order of words change depending on the language.

This substitution looks like `%{d:x}` where `d` is the position in the parameter list, and `x` is the format specifier.

Example:
```javascript
var assert = require('assert');
var sfmt = require('sfmt');

assert.equal(sfmt('This %{1:s} has %{2:d} feet. It\'s a %{1:s}', 4, 'dog'),
    'This dog has 4 feet. It\'s a dog');
```

### Named

Sometimes you need to pull fields directly out of an object. Named substitutions substitute the value of an object field by name. The substitution looks like `%{name:x}` where `name` is the name of the field, and `x` is the format specifier. The fields are pulled from the first parameter to sfmt after the format string.

Example:
```javascript
var assert = require('assert');
var sfmt = require('sfmt');

var critter = {
    species: 'snake',
    feet: 0
};

assert.equal(sfmt('This %{species:s} has %{feet:d} feet.', critter), 'This snake has 0 feet.');
```

### Escaping the `%` character

If you need a literal `%` character you can include it in the format string by using `%%`.

Example:
```javascript
var assert = require('assert');
var sfmt = require('sfmt');

assert.equal(sfmt('Your score on the %s test was %d%%', 'math', 85),
    'Your score on the math test was 85%');
```

### Format specifiers

The following format specifiers are supported:

 * `s` - converts value to a string
 * `d` - converts value to a number
 * `j` - converts value to json by calling JSON.stringify
 * `i` - calls util.inspect on the value

### Combining substitutions

You can use all three substitutions (positional, indexed, and named) in the same format string if you want to. Positional subtitutions are the only one that consume parameters, using indexed or named substitutions have no effect.

Example:
```javascript

var assert = require('assert');
var sfmt = require('sfmt');

assert.equal(sfmt('The quick %s %{1:s} jumped over the %{0:s} %s', 'brown', 'dog'),
    'The quick brown dog jumped over the brown dog');
```

Not quite sure why you'd want to do this, but it does work. :-)
