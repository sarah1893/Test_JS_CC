# Setup, Exercise, and Verify

In this exercise you will be separating a test into *setup*, *exercise*, and *verify* phases. This distinct and well-defined separation of steps makes your test more *reliable, maintainable,* and *expressive*.

The phases are defined as follows:

- Setup - create objects, variables, and set conditions that your test depends on
- Exercise - execute the functionality you are testing
- Verify - check your expectations against the result of the exercise phase. You can use the assert library here

Clearly separating each phase makes a test easier to read, change, and validate.

## Instructions

1. The same test is written twice – once in a naive approach, once using setup, exercise, and verify phases.

Run the test suite.

2. Both tests have errors! The test output will tell you which line threw an error for each test.

Following the examples below, fix both tests using the correct call to ``.pop()``.
```javascript
 const arr = ['entry1', 'entry2'];
 ['entry1', 'entry2'].pop(); // for naive test
 arr.pop(); // for 3phase test
```

> Hint
In the naive approach edit the following expression:
```javascript
assert.ok(pop(['padawan', 'knight']) === 'knight');
```

In the 3 phase approach replace the following expression:
```javascript
const popped = pop(jediPath);
```

3. Which test approach was easier to read and edit? Answer this for yourself then move on to the next exercise.