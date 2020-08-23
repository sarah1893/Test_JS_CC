# assert.ok

As a Node module, ``assert`` can be imported at the top of your files with
```javascript
const assert = require('assert');
```

The [functions in the assert library](https://nodejs.org/api/assert.html) compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more *expressive* test suite.
```javascript
assert.ok(6 - 1 === 5);
```

In this case ``6 - 1 === 5`` evaluates to ``true``, so no error is thrown.

If an argument passed to ``assert.ok()`` evaluates to ``false``, an ``AssertionError`` is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

## Instructions

1. At the top of **index_test.js**, import ``assert`` with the ``require`` function.

> Hint
```javascript
const someVar = require('moduleName')
```

2. Within the provided it block, enter the following expression:
```javascript
assert.ok(result === 91);
```

3. Run the test suite.

4. The argument passed to ``assert.ok()`` throws an error! You should see some descriptive feedback in the terminal.

Make the expression evaluate to true by replacing ``91`` with ``expected``.

5. Run the suite again. Your test should pass now!