# assert.deepEqual II

In the last exercise you used ``deepEqual()`` to compare the values of two objects with loose equality. Arrays are also objects, so ``deepEqual()`` also compares their values with loose equality.
```javascript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, '3'];

assert.deepEqual(arr1, arr2); // No error
assert.deepEqual(arr1, arr3); // No error
```

If you’d like to learn more about ``deepEqual()``, the documentation is available [here](https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message).

## Instructions

1. Run the test suite. You should see an error thrown.

2. Replace ``assert.equal()`` with ``assert.deepEqual()``.

3. Run the test suite again.