# Teardown

Some tests require a fourth phase called *teardown*. This step makes your test *isolated*.

- Teardown - reset any conditions that were changed during the test

A test, like the example in this exercise, can make changes to its environment that could affect other tests. The teardown phase is used to reset the environment before the next test runs.

Some common changes to an environment include

- altering files and directory structure
- changing read and write permissions on a file
- editing records in a database

In some cases — including the previous exercise — the *teardown* phase isn’t needed because there are no conditions to reset.

## Instructions

1. This exercise uses Node’s filesystem library ``fs`` in addition to ``assert``. It’s okay if you’re not familiar with ``fs``: each function is described in comments.

The call to ``fs.appendFileSync(path, str)`` will do one of two things:

   1. If a file at ``path`` does not exist, the method creates the file and adds the string ``str`` to that file.
   2. If the file does exist, the method adds the string ``str`` to the end of the file.

   The current test does not have a teardown phase. Run it using the terminal.

   1. Run the test suite again. Compare this output to the output of the previous test run.

Note the new file ``message.txt`` created in your directory.

    project
    |_ node_modules
    |_ test
    |___ index_test.js
    |_ message.txt
    |_ package.json

3. You got different output because the test was not isolated.
- In the first run the file didn’t exist, so ``fs.appendFileSync`` created a ``message.txt`` file containing the string.
- In the second run, the method added the string to the end of ``message.txt`` because it already existed.

In the terminal enter ``rm message.txt`` to delete the file.

4. Add this code below ``// Teardown``. This method will delete the file at ``path`` before the test finishes.
```javascript
fs.unlinkSync(path);
```

5. Verify that you fixed the issue: run the test suite twice and compare the outputs.