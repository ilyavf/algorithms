var anagram = require('./anagram'),
    assert = require('assert');

var a = 'abcdefgh',
    b = 'bcdaefgh',
    c = 'abacaagg',
    d = 'MARY',
    e = 'ARMY';

console.log(anagram.getHash(a));
console.log(anagram.getHash(b));
console.log(anagram.getHash(c));
console.log(anagram.getHash(d));
console.log(anagram.getHash(e));

assert.ok(anagram.isAnagram(a,b), a + ' and ' + b + ' should be anagram');
assert.deepEqual(anagram.getHash(a), anagram.getHash(b), 'hashmaps of anagrams should be equal');
assert.ok(!anagram.isAnagram(a,c), a + ' and ' + c + ' should NOT be anagram');
assert.ok(!anagram.isAnagram(b,c), b + ' and ' + c + ' should NOT be anagram');
assert.ok(anagram.isAnagram(b,a), b + ' and ' + a + ' should be anagram');
assert.ok(anagram.isAnagram(d,e), d + ' and ' + e + ' should be anagram');
assert.ok(anagram.isAnagram('апельсин', 'спаниель'), 'апельсин — спаниель should be anagram');

console.log('All tests OK');