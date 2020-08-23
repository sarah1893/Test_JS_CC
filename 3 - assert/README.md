# assert

In the last exercise, you learned how to organize and automate tests using the Mocha test framework. To write the tests themselves, we can use the ``assert.ok`` method provided by Node.js.

In programming, a test compares an expected outcome to an actual outcome. For example, we expect the outcome of the following code…
```javascript
const a = 1 + 2;
```

…to be: ``a`` has a value of ``3``. To test the value saved to ``a`` with plain JavaScript, you would need to write a conditional statement comparing ``a`` to the expected result. Inside the statement, you would construct an error when the actual outcome does not match the expected.

``assert.ok()`` allows you to compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more *expressive* test suite.

As a Node module, ``assert`` can be imported at the top of your files with
```javascript
const assert = require('assert');
```

You call ``assert`` functions like this:
```javascript
assert.ok(a === 3);
```

In this case ``a === 3`` evaluates to ``true``, so no error is thrown.

If an argument passed to ``assert.ok()`` evaluates to false, an ``AssertionError`` is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

## Instructions

1. At the top of **index_test.js**, import ``assert`` with the ``require`` function.

2. Within the provided it block, enter the following expression:
```javascript
assert.ok(3 + 4 === 8);
```

3. Run the test suite.

> Hint
Run ``npm test`` in the terminal.

4. The argument passed to ``assert.ok()`` throws an error! You should see some descriptive feedback in the console.

Make the expression evaluate to true by replacing ``8`` with ``7``.

5. Run the suite again. Your test should pass now!