/*
Unique Morse Code Words

Solution
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.

*/

var uniqueMorseRepresentations = function(words) {
    if(words.length ==0 )return 0;
    if(words.length ==1) return 1;
    
    var anum={
            a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k:"-.-",
            l: ".-..", m: "--", n: "-.",o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", 
            u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.."
        }
    
    let res =[];
    for(let i=0;i<words.length;i++){
    let temp= words[i].split('').map(x=> { 
    
      return anum[x];
    });
      res.push(temp.join(''));
    }
    const count = res =>
      res.reduce((a, b) => ({ ...a,
        [b]: (a[b] || 0) + 1
      }), {})
    
      return Object.keys(count(res)).length;
    };

const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const toMorse = (str) => str.split('').map((char) => MORSE[char.charCodeAt(0) - 'a'.charCodeAt(0)]).join('');

const uniqueMorseRepresentations = (words) => new Set(words.map(toMorse)).size;




    let words = ["gin", "zen", "gig", "msg"];
    let w =["rwjje","aittjje","auyyn","lqtktn","lmjwn"];
    
    console.log(uniqueMorseRepresentations(w));