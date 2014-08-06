Algorithms
==========

Just playing with some well-known challenges...

## Anagram:
```javascript
var anagram = require('./anagram');

anagram.isAnagram('MARY', 'ARMY');
// >>> true

anagram.isAnagram('abcd', 'abcc');
// >>> false

anagram.getHash('MARYYY');
// >>> { M: 1, A: 1, R: 1, Y: 3 }

```

## Largest Palindrome:
```javascript
var p = require('./palindrome');

p.getLargestP('marambararab1234543qwe')
// >>> bararab

p.isPalindrome('abcba');
// >>> true

```
