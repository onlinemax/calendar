var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function isCorrect(s) {
    var _a;
    var firstCheck = /\(([^()]+?)\)(?:\d|\d?[+-])/g;
    var other = [];
    var m;
    while ((m = firstCheck.exec(s)) !== null) {
        var tmp = isCorrect(m[1]);
        if (!tmp)
            return false;
        other.push(__spreadArray([parseInt(m.input.charAt(firstCheck.lastIndex - 1))], tmp.flat(), true));
    }
    // console.log(s);
    s = s.split(/\([^()]+?\)(?:\d|\d?[+-])/g).join("|");
    var pattern = /[A-Z][a-z]?\d?[+\-]?(?:(?<=[+\-])\d?)?/g;
    var found = [];
    var indexes = new Set();
    for (var position = 0, tmp = pattern.exec(s); tmp !== null; tmp = pattern.exec(s)) {
        var index = s.indexOf("|", position);
        indexes.add(index);
        if (index != -1 && index < tmp.index) {
            found.push(other.shift());
            position = tmp.index;
        }
        found.push(tmp[0]);
    }
    (_a = s.match(/\|/g)) === null || _a === void 0 ? void 0 : _a.forEach(function (element, index) {
        found.push(other[index]);
    });
    s = s.split("").filter(function (d, i) { return !indexes.has(i); }).join("");
    pattern.exec(s);
    function accumulateLength(accum, currentValue) {
        return accum + currentValue.length;
    }
    var foundLength = found.reduce(accumulateLength, 0);
    if (!(foundLength == s.length + other.reduce(accumulateLength, 0)))
        return false;
    return found;
}
console.log(isCorrect("CU(OH)-"));
