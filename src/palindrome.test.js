var p = require('./palindrome'),
    assert = require('assert');

assert.equal('asdfgfdsa', p.getLargestP('asdfgfdsa'), 'largest palindrome should be \'asdfgfdsa\'');
assert.equal('sdfgfds', p.getLargestP('12345sdfgfds789'), 'largest palindrome should be \'sdfgfds\'');
assert.equal('bararab', p.getLargestP('marambararab1234543qwe'), 'largest palindrome should be \'bararab\'');
assert.equal('asdfgfdsa', p.getLargestP('asdfgfdsa123'), 'largest palindrome should be \'asdfgfdsa\'');
assert.equal('1234567654321', p.getLargestP('asdfgfdsa1234567654321qwe'), 'largest palindrome should be \'1234567654321\'');
assert.ok(p.isPalindrome('abcba'), 'abcba should be a valid palindrome');

console.log('Palindrome: All tests OK.');