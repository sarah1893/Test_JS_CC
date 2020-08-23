# assert.deepEqual I

Do you think these assertions will throw errors?
```javascript
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};
assert.equal(a, b);
assert.strictEqual(a, b);
```
Bot
h assertions will throw an error because distinct objects are not considered equal when using either loose or strict equality in JavaScript.

If you need to compare the values within two objects, you can use ``assert.deepEqual()``. This method compares the values of each object using loose (``==``) equality.

The following code will not throw an error…
```javascript
assert.deepEqual(a, b);
```
…and you can confirm by manually comparing the ``relation`` and ``age`` properties of each object.
```javascripr
a.relation == b.relation;
a.age == b.age;
```


## Instructions

1. Run the test suite. You should see an error thrown.


2. Replace ``assert.equal()`` with ``assert.deepEqual()``.

3. Run the test suite again.