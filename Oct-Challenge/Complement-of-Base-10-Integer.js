var bitwiseComplement = function(N) {
    let s = N.toString(2);
    let r = '';
    s.split('').forEach(e => e == 1 ? r += 0 : r += 1);

    return parseInt(r, 2);
};
console.log(bitwiseComplement(7));