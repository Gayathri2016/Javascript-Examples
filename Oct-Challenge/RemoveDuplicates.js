var removeDuplicateLetters = function(s) {
    var str= s.split('').forEach(e=>s.indexOf(e)===-1?s.slice(e):s);
     return str;
 };

 console.log(removeDuplicateLetters('bcabc'));