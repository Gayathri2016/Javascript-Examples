var longestPalindrome = function(s) {
    if(s.length <=1)
            return s;
    let start = 0;
    let maxLen = 0;
    
    for(let i=0;i<s.length;i++) {
        let len1 = expand(s, i, i);
        let len2 = expand(s, i, i+1);
        const len = Math.max(len1, len2);
        if(len>maxLen) {
            maxLen = len;
            start = i - Math.floor((len-1)/2);
        }
    }
    return s.substr(start, maxLen);
};

var expand = function(str, left, right) {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return right - left -1;
}
let longestPalindrome1 = (s, ans = '') => {
    let N = s.length;
    if (!N) return ans;
    ans = s[0];
    let expand = (i, j) => {
        for (; 0 <= i && j < N && s[i] == s[j]; --i, ++j)
            if (ans.length < j - i + 1)
                ans = s.substring(i, j + 1); // +1 for i..j inclusive 🎯
    };
    for (let i = 0; i + 1 < N; ++i)
        expand(i, i),     // case 1: odd length palindrome
        expand(i, i + 1); // case 2: even length palindrome
    return ans;
};
console.log(longestPalindrome('ababds'));