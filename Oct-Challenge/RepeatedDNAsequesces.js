var findRepeatedDnaSequences = function(s) {
    let seen = new Set();
    let out = new Set();
    if (s.length > 10) {
        for(let i = 0; i <= s.length-10; i++) {
            let com = s.substring(i,i+10);
            seen.has(com) ? out.add(com) : seen.add(com);
        }
    }
    return [...out];
};
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));