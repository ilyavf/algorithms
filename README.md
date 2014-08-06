Algorithms
==========

Just playing with some well-known algorithms...

## Anagram:
```javascript
var anagram = require('./anagram');

anagram.isAnagram('MARY', 'ARMY');
// >>> true

anagram.isAnagram('abcd', 'abcc');
// >>> false

anagram.getHash('MARYYY');
// >>> { M: 1, A: 1, R: 1, Y: 3 }

anagram.compareHash({ M: 1, A: 1, R: 1, Y: 3 }, { A: 1, R: 1, M: 1, Y: 3 });
// >>> true

```

## Largest Palindrome:
```javascript
var p = require('./palindrome');

p.getLargestP('marambararab1234543qwe')
// >>> bararab

p.isPalindrome('abcba');
// >>> true

```