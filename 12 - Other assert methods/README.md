# Other assert methods

Node’s ``assert`` library includes more than the four methods covered so far. You can find them all in the [Node.js documentation](https://nodejs.org/api/assert.html).

Many of the methods can be implemented using other methods, like using ``assert.ok(1 == 1)`` to implement ``assert.equal(1,1)``. Although this can be used for many types of tests, more descriptive functions like ``assert.equal``, ``assert.strictEqual``, and ``assert.deepEqual`` allow us to be more *expressive*: the expected functionality of the implementation code is clear to anyone reading your tests.

## Instructions

1. Using the link above, go to the ``assert`` documentation and find a more *expressive* way to implement ``assert.ok(1 !== 2)``.

> Hint
Read the documentation for [assert.notEqual()](https://nodejs.org/api/assert.html#assert_assert_notequal_actual_expected_message).