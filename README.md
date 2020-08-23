# AUTOMATE AND ORGANIZE TESTS

## Install Mocha I

Before writing any tests you’ll need to use [Node.js and npm](https://www.codecademy.com/articles/what-is-node) to set up a JavaScript project and install Mocha.

- *Node* allows you to run JavaScript in the terminal
- *npm* is a Node tool that allows you to download packages from the web, and manage them in a JavaScript project
- *Mocha* is one of those packages and is used to test other JavaScript code

A JavaScript project is a directory of files. The following command creates a file **package.json** that can be used to manage packages for the project.

```javascript
$ npm init
```

After running this command you will be prompted to enter information about your project. It’s okay to skip some fields if you’re not ready to enter that information.

With your project setup, you can install packages.

```javascript
$ npm install mocha -D
```

Here’s what this command means:
- ``npm install`` tells npm to install a package from the internet and any other packages it depends on
- ``mocha`` is the package you want to download
- ``-D`` notes that this package is a dependency for your project, which makes it easier for other developers to use

Once you ``npm install`` packages, you can find the packages and all their dependencies in the **node_modules** folder. The new directory structure contains the following:

```javascript
project
|_ node_modules
|___ .bin
|___ mocha
|___ ...
|_ package.json
```

The ``...`` in the file structure represents other packages that are a dependency for Mocha.

### Instructions

1. Initialize the project. In the terminal window type:
```javascript
$ npm init
```

Hit the Enter key to skip each prompt. This creates a **package.json** file in your project directory.

Check your work after each instruction.

2. Install Mocha as a package and save it as a dependency. In the terminal window type:
```javascript
$ npm install mocha -D
```
You can view **package.json** in the text editor. You can now see mocha as a dependency!


## Install Mocha II

After installing Mocha as a dependency we can run it in two ways.

The first (and more tedious) method is to call it directly from **node_modules**:
```javascript
$ ./node_modules/mocha/bin/mocha
```

The second (and recommended) method is to add a script to **package.json**. In the ``scripts`` object in **package.json**, set the value of ``"test"`` to ``mocha``. It should look like this:
```javascript
"scripts": {
  "test": "mocha"
}
```

Now you can call Mocha with the following command:
```javascript
$ npm test
```

Instead of manually running each test in the **test** directory, you can use this command to run the full test suite automatically.

### Instructions

1. Using the guide above, set the ``test`` script to ``"mocha"`` in **package.json**. This connects the command line command ``npm test`` with the Mocha package.

2. Run the test suite with Mocha. In the terminal window type:
```javascript
$ npm test
```

The command will be executed but you will see a warning in the terminal: there aren’t any tests to run yet!

## Review

You can now write tests with Mocha and Node’s ``assert.ok()`` ! In this lesson you learned to:

- Install Mocha with npm
- Organize tests with ``describe()`` and ``it()``
- Ensure your tests are isolated and expressive with the four phases of a test
- Ensure your tests are reliable with hooks
- Write assertions with ``assert.ok()``

As you continue to write tests, remember to always evaluate them against the [characteristics of a good test](https://www.codecademy.com/articles/tdd-u2-good-test): fast, complete, reliable, isolated, maintainable, and expressive. If you are meeting these six criteria, you are creating high quality test frameworks!

## Review 2 

You can now write tests with Node’s ``assert`` library! In this lesson you learned to:

- Check for loose (``==``) equality with ``assert.equal()``
- Check for strict (``===``) equality with ``assert.strictEqual()``
- Check the equality of two object’s values with ``assert.deepEqual()``
- Make your tests expressive by using different ``assert`` methods found in the [Node.js documentation](https://nodejs.org/api/assert.html).

As you continue to write tests, remember to always evaluate them against the characteristics of a good test: fast, complete, reliable, isolated, maintainable, and expressive. If you are meeting these six criteria, you are creating high quality test frameworks!