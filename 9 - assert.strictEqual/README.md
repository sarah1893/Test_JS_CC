# assert.strictEqual

Take a look at the code below. Will these assertions throw errors?
```javascript
const a = 3;
const b = '3';
assert.ok(a == b);
assert.ok(a === b);
```

- The first assertion will not throw an error because it uses loose (``==``) equality. It performs a type conversion when comparing two things.
- The second will throw an error because it uses strict (``===``) equality. It returns ``false`` if the types differ.

If you need to be strict in evaluating equality, you can use ``assert.strictEqual()``.

- ``assert.equal()`` performs a == comparison
- ``assert.strictEqual()`` performs a ``===`` comparison

Compare the following code to the previous example. This code performs the same verifications, but it is more *expressive*. Without parsing any logic, a reader would know the intention of your tests by reading the method names.
```javascript
const a = 3;
const b = '3';
assert.equal(a, b);
assert.strictEqual(a, b);
```

## Instructions

1. Set ``expected`` to the string ``'96'`` and run the test suite. The test still passes!

2. Replace ``assert.equal()`` with ``assert.strictEqual()``

3. Run the test suite in the command line. The test fails!

4. Reset ``expected`` to ``96`` so that ``assert.strictEqual()`` does not return an error.

5. Run the test suite.