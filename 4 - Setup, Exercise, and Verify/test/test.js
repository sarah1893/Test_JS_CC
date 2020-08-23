console.log = function() {};

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 2', () => {
  it('does not pass unless correct .pop notation is used', () => {

    let structure = function() { 
      describe(_, () => {
        it(_, () => {
          assert.ok($arr1.pop() === $str); 
        });
      });
      describe(_, () => {
        it(_, () => {
          const $var = $arr2.pop();
        });
      });
    }; 

    let varCallbacks = {
      '$arr1': function(arr1, arr2) {
        if (arr1.type !== 'ArrayExpression') {
          return {failure: 'naive approach: Must call .pop on an array'};
        }
        return true;
      }
    };

    // assert that structure matches
    let isMatch = Structured.match(code, structure, {varCallbacks: varCallbacks});
    let failureMessage = 'Use the dot (.) structures provided in the instructions';
    assert.isOk(isMatch, varCallbacks.failure || failureMessage);

    // look for `assert.ok(.pop() === )`
    let codeMatch = code.match(/assert\.\s*ok\s*\(.*\.\s*pop\s*\(\s*\)\s*===.*\)/);
    assert.isOk(codeMatch, 'naive approach: Call .pop() within the parentheses of assert.ok()');

    // look for `jediPath.pop()`
    codeMatch = code.match(/jediPath\s*\.\s*pop\s*\(\s*\)/);
    assert.isOk(codeMatch, '3phase approach: Call jediPath.pop()');
  });
});
