'use strict';

const ESLint = require('../fixtures/eslint');
const chai = require('chai');
chai.should();

describe('ESLint', function () {
  // This test just verifies that ESLint runs without errors,
  // which means that all of our modules are syntactically valid
  it('should run without errors', function () {
    let results = ESLint.run('modular',
      "'use strict';\n" +
      'var foo = 1;\n' +
      'function bar () {}\n' +
      'bar(foo);\n'
    );

    results.errorCount.should.equal(0);
  });

  // This test just verifies that ESLint correctly loaded our modules
  it('should report errors for rule violations', function () {
    let results = ESLint.run('modular', 'var foo = "hello, world"');

    results.errorCount.should.equal(5);
    results.rules.should.deep.equal([
      'strict', 'no-unused-vars', 'quotes', 'eol-last', 'semi'
    ]);
  });
});

