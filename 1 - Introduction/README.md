# Introduction

Testing is an essential part of development. When used properly, testing can catch and identify issues with your implementation code before you deploy it to users. Instead of testing every function manually, developers automate their tests with a *test framework*.

Developers use test frameworks to organize and automate tests that provide useful feedback when errors occur. In this lesson we will use the [Mocha test framework](https://mochajs.org/) to write tests against JavaScript methods.

In this lesson you will:

- Learn to write a basic Mocha test suite
- Use Node’s ``assert.ok`` method to verify the expected output of your code
- Understand and apply the four phases of a test to create an expressive testing suite
- Evaluate the quality of your tests against the characteristics of a good test
  

### Characteristics of a Good Test

A test suite is a collection of tests that you can run against a piece of software. The goal is for these tests to catch any errors in your software before you make it available to the end user.

A good test suite is one that doesn’t take long to run, and if all the tests are passing, provides you with confidence that your software is working as expected. If a good test suite catches a bug, it will return feedback that can help you identify the source of the issue, and help you resolve it.

A bad test suite may take a long time to run and/or, if passing, won’t provide you with confidence that your software is working as expected. If a bad test suite catches a bug, it may not return helpful feedback or be a false negative, which will make it challenging to identify the source of the issue.

In this article, you will learn about six characteristics of a good test suite, originally enumerated by Josh Steiner and Joël Quenneville’s Testing Rails. Let these characteristics guide your decisions in writing tests. Any change to your test suite should increase its value in at least one of these characteristics:

- Fast
- Complete
- Reliable
- Isolated
- Maintainable
- Expressive

#### CHARACTERISTICS OF AN EFFECTIVE TEST SUITE

**FAST**
As you learn more about tests in the context of full-stack web applications, you will find that some types of tests, called unit tests, are fast, while other tests, called integration tests, are slower. If your test suite contains a large collection of integration tests, and few unit tests, you may end up waiting a few minutes or even hours for your test suite to execute.

A fast test suite will provide feedback more quickly, and thus, make the development process more efficient. Even a small improvement in speed can have a significant impact: Say that a developer works on a bug for 2 hours and needs to run the suite every 10 minutes. If the time to run the test suite is reduced by 30 seconds, then the developer saves 6 minutes. If the developer’s 4 teammates are blocked by this bug, then they also save 6 minutes in waiting time, for a total of 30 minutes. The small improvement of half a minute is multiplied across runs and developers to half an hour of savings.

**COMPLETE**
A test suite that covers 100% of your codebase will catch any errors that arise from changing or adding code to your application. A complete test suite provides you with confidence that your software is working as expected. This characteristic can often run in conflict with building a fast test suite — as you investigate testing further, you will learn about strategies that help you optimize your test suite for speed and completeness.

**RELIABLE**
A reliable test suite is one that provides consistent and accurate feedback. An unreliable test suite may have tests that fail intermittently, with no helpful feedback about changes you’ve made to your application. If you can’t trust the results of your tests, then they have no value to you.

While a developer is addressing a bug in their codebase, they will need to run their test suite a few times to see if they’ve addressed the issue. What if they run the test suite two times in-a-row and don’t change their implementation, but receive different sets of failing tests? This is a sign that the developer’s test suite is unreliable. It’s like trying to hit a moving target — they can’t trust if their implementation is wrong or if their test suite is unreliable.

**ISOLATED**
An isolated test suite contains tests that run without impacting other tests in the suite. This may require you to cleanup persisting data after you run a test in your suite.

For example, you may want to test whether your software properly writes to a database. You don’t want any changes to the database persisting outside of this test. If a change to the database does persist, it may cause unexpected behavior in a test that reads from the database.

**MAINTAINABLE**
A maintainable test suite is easy to manipulate — you should be able to add, change, or remove tests with ease. If you don’t know how to add tests to run against new features, your test suite may become incomplete and ineffective.

The best way to keep your test suite maintainable is to be organized, follow coding best practices, and develop a consistent process that works for you and your team. There are frameworks, like Mocha, built to help you with maintainability.

**EXPRESSIVE**
The easy-to-read nature of test suites make them a great form of documentation. You should always write code that is descriptive of the features you are testing.

You should try to build a test suite that is descriptive enough for another developer to read and better understand the purpose of the web application. Also, because your test suite can be executed as part of your software, it is more likely to stay up-to-date than a README or other written form of documentation.

**CONCLUSION**
In this article, we covered six characteristics of a good test suite. Use these characteristics as you begin to build your own test suites, and as you evaluate strategies to approach test suite development.

Keep these top-of-mind as you begin building and evaluating your own test suites. The MC-FIRE acronym (Maintainable, Complete, Fast, Isolated, Reliable, and Expressive) may be a helpful acronym to remember these characteristics as you work.


## Instructions

1. A complete test suite is provided for you on the right. Run the suite and view its output by typing ``npm test`` in the terminal and hitting Enter.

Can you match the test output in your terminal to strings in **index_test.js**?