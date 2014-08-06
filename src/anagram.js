function isAnagram (str1, str2) {
    return str1.length === str2.length && compareHash(getHash(str1), getHash(str2));
}
function getHash (str) {
    return str.split('').reduce(reduceToHash, {});
}
function reduceToHash (obj, key) {
    if (typeof obj[key] === 'undefined') obj[key] = 0;
    obj[key]++;
    return obj;
}
function compareHash (obj1, obj2) {
    var res = true;
    for (var i in obj1) {
        res = res && obj1[i] === obj2[i];
    }
    return res;
}

module.exports = {
    isAnagram: isAnagram,
    getHash: getHash
};