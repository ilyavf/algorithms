function isPalindrome (s) {
    var res = (s.length  > 1 && s === s.split('').reverse().join(''));
    //console.log('isPalindrome of ' + s + ' -> ' + res);
    return res;
}

function getLargestP (s) {
    if (isPalindrome(s)) {
        return s;
    }
    if (s.length == 2) {
        return false;
    }

    var s1 = s.substr(0, s.length-1),
        s2 = s.slice(1),

        l1 = s1 && getLargestP(s1),
        l2 = s2 && getLargestP(s2);

    return l1 && l2 && (l1.length >= l2.length ? l1 : l2)
        || l1
        || l2;
}

module.exports = {
    isPalindrome: isPalindrome,
    getLargestP: getLargestP
};

//120