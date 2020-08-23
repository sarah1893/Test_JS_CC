console.log = function() {};

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 3', () => {
  it('asserts that `assert.ok(result === expected)` is in it block', () => {

    let structure = function() { 
      describe(_, () => {
        it(_, () => {
          assert.ok($expr);
        });
      });
    }; 

    // assert that structure matches
    let isMatch = Structured.match(code, structure);
    let failureMessage = 'Call `assert.ok(result === expected)` in the `it` block.';
    assert.isOk(isMatch, failureMessage);

    // assert that regex matches
    let codeMatch = code.match(/assert\.\s*ok\s*\(\s*(result|expected)\s*===\s*(result|expected)\)\s*/);
    assert.isOk(codeMatch, 'Use the expression `result === expected`.');

    // assert that first and second capture groups are result and expected or expected and result
    assert.isOk( (codeMatch[1] == 'result' && codeMatch[2] == 'expected' || codeMatch[1] == 'expected' && codeMatch[2] == 'result'),
                  'Use the expression `result === expected`.');
  });
});