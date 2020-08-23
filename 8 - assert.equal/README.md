# assert.equal

You can use ``assert.ok()`` for most verifications, but sometimes it can be difficult to determine the condition you are evaluating.

Read the example code below. Will this assertion throw an error?
```javascript
const landAnimals = ['giraffe', 'squirrel'];
const waterAnimals = ['shark', 'stingray'];

landAnimals.push('frog');
waterAnimals.push('frog');

assert.ok(landAnimals[2] == waterAnimals[2]);
```

The above assertion is checking for equality. In order to understand this you must evaluate the entire expression within the parentheses of ``.ok()``.

You can instead use ``assert.equal()`` which does the ``==`` comparison for us.

In the example below, the two methods achieve the same outcome.
```javascript
assert.ok(landAnimals[2] == waterAnimals[2]);
assert.equal(landAnimals[2], waterAnimals[2]);
```

The second line is more expressive: instead of parsing the entire statement, a reader only needs to read the first two words to know the test is verifying equality!

## Instructions

1. Replace the call to ``assert.ok()`` with the equivalent call to ``assert.equal()``.

Though your test will work regardless of the order you pass the ``actual`` and ``expected`` results, it is common practice to pass ``actual`` first and ``expected`` second.

> Hint
Don’t forget to use a comma: ``assert.equal(result, expected)``.

2. Run the test suite.