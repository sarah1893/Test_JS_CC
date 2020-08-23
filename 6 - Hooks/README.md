# Hooks

Using teardown in the ``it`` block made your test *isolated*, but not *reliable*.

If the system encounters an error before it reaches the teardown, it will not execute that phase. In the previous example, an error may occur after the file is created but before it is deleted. The file would persist and may cause false negatives in future test runs.

Mocha provides *hooks* to solve that problem.

A hook is a piece of code that is executed when a certain event happens. Hooks can be used to set and reset conditions like the setup and teardown phases do. In Mocha, a hook is written within a ``describe`` block.
```javascript
describe('example', () => {

  afterEach(() => {
    // teardown goes here
  });

  it('.sample', () => {
    // test goes here
  });
});
```

In this example the function passed to ``afterEach`` is called after each it block is executed.

The other hooks in the Mocha library are ``before()``, ``beforeEach()``, and ``after()``. You can read more about them on the [Mocha website](https://mochajs.org/#hooks).

## Instructions

1. Run the test suite.

2. A misspelling on line 16 caused the ``TypeError`` that you see. It prevented the execution of the teardown phase! This means the ``message.txt`` file wasn’t deleted (see below).

    project
    |_ node_modules
    |_ test
    |___ index_test.js
    |_ message.txt
    |_ package.json

In the terminal enter ``rm message.txt`` to delete the file.

3. Within the describe block, create an ``afterEach`` hook with an empty function as its argument.

> Hint
```javascript
describe('...', () => {

  afterEach(() => {

  });

  it('...', () => {
});
```

4. Move the teardown phase into the ``afterEach`` hook.

> Hint
```javascript
describe('...', () => {

  afterEach( () => {
  // paste teardown phase here
  });

  it('...', () => {
  // cut teardown phase here
});
```

5. Confirm the hook works!

Run test suite and find that ``message.txt`` is deleted despite the error in ``it`` block.