# describe and it blocks

In Mocha we group tests using the ``describe`` function and define tests using the ``it`` function. These two functions can be used to make your test suite *complete, maintainable,* and *expressive* in the following ways:
- Structure your test suite: you can organize tests into nested groups that reflect the structure of your implementation code.
- Provide informative messages: you can define your tests using human-readable strings.

If you are testing a ``Math`` object with the method ``.max``, you could use the following test code.
```javascript
describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});
```

Both the ``describe`` and ``it`` functions accept two parameters: a descriptive string and a callback function. Though the functions are flexible, they are commonly used in the structure above: nest ``describe`` blocks to resemble the structure of your implementation code and write individual tests in ``it`` blocks. This makes your test suite *isolated, maintainable,* and *expressive*.

## Instructions

1. Using the previous example as a guide, you will write a ``describe`` - ``describe`` - ``it`` block for the function ``Math.min()``.

In **test/index_test.js**, create your first ``describe`` block using ``'Math'`` as the descriptive string.

2. Within the block, create another ``describe`` block using ``'.min'`` as the descriptive string.

3. Within the block, create an it block using ``'returns the argument with the lowest value'`` as the descriptive string.