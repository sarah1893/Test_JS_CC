console.log = function() {};

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 4', () => {
  it('asserts that 3 + 4 === 7', () => {

    let structure = function() { 
      describe(_, () => {
        it(_, () => {
          assert.ok($expr);
        });
      });
    }; 

    // assert that structure matches
    let isMatch = Structured.match(code, structure);
    let failureMessage = 'Call `assert.ok(3 + 4 === 7)` in the `it` block.';
    assert.isOk(isMatch, failureMessage);

    // assert that regex matches
    let codeMatch = code.match(/assert\.\s*ok\s*\((\d)\s*\+\s*(\d)\s*===\s*7\s*\)/);
    assert.isOk(codeMatch, 'Use the expression `3 + 4 === 7`.');

    // assert that first and second capture groups are 3 and 4 or 4 and 3
    assert.isOk( (codeMatch[1] == 3 && codeMatch[2] == 4 || codeMatch[1] == 4 && codeMatch[2] == 3),
                  'Use the expression `3 + 4 === 7`.');
  });
});