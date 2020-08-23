console.log = function() {};

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 4', () => {
  it('asserts that hook contains teardown', () => {

    let structure1 = function() { 
      describe(_, () => {
        afterEach( () => {
          fs.unlinkSync($path);
        });
      }); 
    };

    let structure2 = function() { 
      describe(_, () => {
        afterEach( function() {
          fs.unlinkSync($path);
        });
      }); 
    };

    let varCallbacks = {
      '$path': function(path) {
        if (path.name !== 'path') {
          return {failure: "`fs.unlinkSync()` missing argument `'path'`"};
        }
        return true;
      }
    };

    // assert that structure matches
    let isMatch1 = Structured.match(code, structure1, {varCallbacks: varCallbacks});
    let isMatch2 = Structured.match(code, structure2, {varCallbacks: varCallbacks});
    let failureMessage = 'Structure is not correct or hook is missing `fs.unlinkSync()`';
    assert.isOk(isMatch1 || isMatch2, varCallbacks.failure || failureMessage);

  });
});

